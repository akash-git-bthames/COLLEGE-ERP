import bcrypt from "bcrypt";
import { errors } from "@vinejs/vine"; 
import {
    studentCreationSchema
} from "../validations/studentValidationSchema.js";
import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

const createStudent= async (req, res)=>{
    try {
        const body = req.body;
        const validator = vine.compile(studentCreationSchema);
        const payload = await validator.validate(body);
  
        //findstudent
        const findStudent = await prisma.student.findunique({
          where: {
            enrollment_number: payload.enrollment_number,
          },
        });
        if (findStudent) {
          return res.status(400).json({
            errors: {
              adminName: "Student already exist",
            },
          });
        }
        //create student
  
        const newStudent = prisma.student.create({
          data: { payload },
        });

        return res.status(200).json({
          message: "Student created successfully",
          newStudent,
        });
      } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
          // console.log(error.messages);
          return res.status(400).json({ errors: error.messages });
        } else {
          return res.status(500).json({
            status: 500,
            message: "Something went wrong.Please try again.",
          });
        }
    }
}


const updateStudentdetail=async (req, res) => {
    try {
      const body = req.body;
      const validator = vine.compile(updateStudentSchema);
      const payload = await validator.validate(body);
  
      // Check if the user is an admin
      if (req.user.role !== 'ADMIN'&&req.user.role !== 'SUPERADMIN') {
        return res.status(403).json({ message: 'Access denied' });
      }
      // Get student ID from request parameters
      const { student_id } = req.params;
  
      // Update student details in the database
      const updatedStudent = await prisma.student.update({
        where: { student_id: payload.student_id },
        data: payload
      });
  
      res.json({ message: 'Student details updated successfully', student: updatedStudent });
    } catch (error) {
      console.error("Update error:", error); // Log detailed error
      if (error instanceof errors.E_VALIDATION_ERROR) {
        return res.status(400).json({ errors: error.messages });
      } else {
        return res.status(500).json({
          status: 500,
          message: "Something went wrong. Please try again.",
        });
      }
    }
  }

  

  const deleteStudent=async (req, res) => {
    try {
      // Check if the user is an admin or superadmin
      if (req.user.role !== 'ADMIN' && req.user.role !== 'SUPERADMIN') {
        return res.status(403).json({ message: 'Access denied' });
      }
  
      // Get student ID from request parameters
      const { student_id } = req.params;
  
      // Delete the student from the database
      const deletedStudent = await prisma.student.delete({
        where: { student_id: parseInt(student_id) },
      });
  
      res.json({ message: 'Student deleted successfully', student: deletedStudent });
    } catch (error) {
      console.error("Deletion error:", error); // Log detailed error
      return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again.",
      });
    }
  }

 //GET STUDENTS DETAIL
 
  const getstudentsbyclass=async (req, res) => {
    const { className, sessionId } = req.query;
  
    try {
      const students = await prisma.enrollment.findMany({
        where: {
          className: className,
          session_id: parseInt(sessionId),
        },
        include: {
          student: true, // This includes student details in the response
        },
      });
  
      if (students.length > 0) {
        res.json(students.map(enrollment => enrollment.student));
      } else {
        res.status(404).json({ message: 'No students found for the given class.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong. Please try again.', error });
    }
  }

  


  export default {createStudent,updateStudentdetail,deleteStudent,getstudentsbyclass}
