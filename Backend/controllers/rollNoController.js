import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

const assignRollNumbersAlphabetically = async (sessionId, classId) => {
    try {
      // Step 1: Retrieve Students by Class and Order Alphabetically
      const students = await prisma.student.findMany({
        where: {
          Enrollments: {
            some: {
              session_id: sessionId,
              Sclass_id: classId
            }
          }
        },
        orderBy: [
          { first_name: 'asc' },
          { last_name: 'asc' }
        ]
      });
  
      // Step 2: Assign Sequential Roll Numbers
      for (let i = 0; i < students.length; i++) {
        const rollNumber = (i + 1).toString(); // Generate roll number 
        
        // Step 3: Update the Roll Number in the Enrollment Table
        await prisma.enrollment.updateMany({
          where: {
            student_id: students[i].student_id,
            session_id: sessionId,
            Sclass_id: classId
          },
          data: {
            roll_number: rollNumber
          }
        });
  
        // Optionally, update in the Student table as well
        await prisma.student.update({
          where: {
            student_id: students[i].student_id
          },
          data: {
            currentClass_Roll_number: parseInt(rollNumber)
          }
        });
      }
  
      console.log('Roll numbers assigned successfully.');
  
    } catch (error) {
      console.error('Error assigning roll numbers:', error);
    } finally {
      await prisma.$disconnect();
    }
  };

  const assignRollNumberToStudentAfterLocking=async (req,res)=>{
    try{
    const rollNumber=req.rollNumber
      const findRollNumber=await prisma.enrollment.findunique({
        where:{
            SClassId:req.SClassId,
            rollNumber:req.rollNumber
        }
        
      })
      if(findRollNumber){
        res.status(400).json({
            error:"Roll Number already exist"
        })
      }
      const updateRollNumber=await prisma.enrollment.update({
        where:{
            SClassId:req.SClassId,
            student_id:req.student_id,
        },
        data:{
            rollNumber:rollNumber
        }
      })
      
    }
    catch (error) {
        console.error('Error assigning roll numbers:', error);
      }
  }

  