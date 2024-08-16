import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();
import { createSessionSchema } from "../validations/sessionValidationSchema";


 const createNewSessionFunction = async (prevSessionId, newSessionName) => {
    const newSession = await prisma.session.create({
      data: {
        session_name: newSessionName,
        start_date: new Date(), // Add appropriate dates
      },
    });
  
    const SClasses = await prisma.SClass.findMany({
      where: { session_id: prevSessionId },
    });
  
    for (const currentSClass of SClasses) {
      const newSClass = await prisma.SClass.create({
        data: {
          SClass_name: currentSClass.SClass_name,
          SClass_teacher_id: currentSClass.SClass_teacher_id,
          
          session_id: newSession.session_id,
        },
      });
  
      const subjects = await prisma.subject.findMany({
        where: { class_id: currentSClass.SClass_id, session_id: prevSessionId },
      });
  
      for (const subject of subjects) {
        await prisma.subject.create({
          data: {
            subject_name: subject.subject_name,
            SClass_id: newSClass.SClass_id,
            session_id: newSession.session_id,
            subjectTeacher_id:subject.subjectTeacher_id
          },
        });
      }
  
      // Find and duplicate teacher assignments
      const teachers = await prisma.teacher.findMany({
        where: {SCclass_id: currentSClass.SClass_id, session_id: prevSessionId },
      });
  
      for (const teacher of teachers) {
        await prisma.teacher.create({
          data: {
            first_name: teacher.first_name,
            last_name: teacher.last_name,
            email: teacher.email,
            phone: teacher.phone,
            address: teacher.address,
            password: teacher.password,
            session_id: newSession.session_id,
            SClass_id: newSClass.SClass_id,
          },
        });
      }
    }
  
    console.log(`New session ${newSessionName} created with id ${newSession.session_id}`);
  };
  
  const createNewSessionAPI=async (req, res) => {
    try {
      const body = req.body;
      const validator = vine.compile(createSessionSchema);
      const payload = await validator.validate(body);
  
      const { prevSessionId, newSessionName } = payload;
  
      const newSession = await createNewSessionFunction(prevSessionId, newSessionName);
  
      res.status(201).json({
        message: `New session ${newSessionName} created with id ${newSession.session_id}`,
      });
    } catch (error) {
      console.error(error);
  
      if (error instanceof vine.errors.ValidationError) {
        return res.status(400).json({ errors: error.messages });
      } else {
        return res.status(500).json({
          status: 500,
          message: 'Something went wrong. Please try again.',
        });
      }
    }
  }

  




  export default {createNewSessionAPI}