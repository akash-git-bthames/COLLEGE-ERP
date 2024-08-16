import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();


const addStudentToSclass=async (req, res) => {
    const { studentIds, SClassId, sessionId } = req.body;
  
    try {
      for (const studentId of studentIds) {
        // Add each selected student to the class
        await prisma.enrollment.create({
          data: {
            student_id: studentId,
            SClass_id: SClassId,
            session_id: sessionId,
            // roll_number: generateRollNumber(), // Assuming you have a function to generate roll numbers
          },
        });
      }
  
      res.json({ message: 'Students added to the class successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong. Please try again.', error });
    }
  }