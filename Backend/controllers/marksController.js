import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Function to allow teachers to upload marks
const allowMarkUpload = async (req, res) => {
    try {
      const { session_id } = req.body;
  
      const enrollments = await prisma.enrollment.findMany({
        where: { session_id },
      });
  
      for (const enrollment of enrollments) {
        await prisma.mark.create({
          data: {
            enrollment_id: enrollment.enrollment_id,
            assessment_type: 'Half-yearly', // or 'Annual' based on the period
            marksObtained: null, // Initialize with null
            totalMarksOfSubject: null, // Initialize with null
          },
        });
      }
  
      res.status(200).json({ message: 'Marks slots created successfully for all students.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong.' });
    }
  }


const uploadMarks = async (req, res) => {
    try {
      // Assume that req.body contains marks, enrollment_id
      const {totalMarksOfSubject, marks, enrollment_id } = req.body;

      // Ensure the teacher is uploading marks for the correct class and subject
    const teacher_id = req.user.teacher_id; // Assuming the teacher is authenticated and has an ID
    if (enrollment.teacher_id !== teacher_id) {
      return res.status(403).json({ message: 'You are not authorized to upload marks for this student.' });
    }
  
      // Update the mark record for the given enrollment
      const updatedMark = await prisma.mark.update({
        where: {
          enrollment_id: enrollment_id,
        },
        data: {
            totalMarksOfSubject:totalMarksOfSubject,
          marksObtained: marks,
        },
      });
  
      res.json({ message: 'Marks updated successfully.', updatedMark });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating marks.' });
    }
  };

const createUploadMarksDataWhenMarksDataInArrayForm=async (req, res) => {
    const { marksData } = req.body; // Array of objects containing enrollment_id, marksObtained, and totalMarks
  
    try {

        // Ensure the teacher is uploading marks for the correct class and subject
    const teacher_id = req.user.teacher_id; // Assuming the teacher is authenticated and has an ID
    if (enrollment.teacher_id !== teacher_id) {
      return res.status(403).json({ message: 'You are not authorized to upload marks for this student.' });
    } 
    
      const markPromises = marksData.map(async (mark) => {
        const existingMark = await prisma.mark.findUnique({
          where: {
            enrollment_id_assessmentType: {
              enrollment_id: mark.enrollment_id,
              assessmentType: mark.assessmentType,
            },
          },
        });
  
        if (existingMark) {
          // If marks already exist, update them
          return prisma.mark.update({
            where: { mark_id: existingMark.mark_id },
            data: {
              marksObtained: mark.marksObtained,
              totalMarks: mark.totalMarks,
            },
          });
        } else {
          // If marks don't exist, create a new record
          return prisma.mark.create({
            data: {
              enrollment_id: mark.enrollment_id,
              assessmentType: mark.assessmentType,
              marksObtained: mark.marksObtained,
              totalMarks: mark.totalMarks,
            },
          });
        }
      });
  
      await Promise.all(markPromises);
  
      res.status(200).json({ message: 'Marks uploaded/updated successfully' });
    } catch (error) {
      console.error('Error updating marks:', error);
      res.status(500).json({ message: 'Failed to update marks' });
    }
  }


  