import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//Get Student by filters

export const searchByClass = async (req, res) => {
  const { classId } = req.params;
  try {
    const students = await prisma.student.findMany({
      where: {
        Enrollments: {
          some: { Sclass_id: parseInt(classId, 10) },
        },
      },
      include: { fees: true },
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students by class' });
  }
};

export const searchBySession = async (req, res) => {
  const { sessionId } = req.params;
  try {
    const students = await prisma.student.findMany({
      where: {
        Enrollments: {
          some: { session_id: parseInt(sessionId, 10) },
        },
      },
      include: { fees: true },
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students by session' });
  }
};

export const searchByFeeStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const students = await prisma.student.findMany({
      where: {
        fees: {
          some: { status },
        },
      },
      include: { fees: true },
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students by fee status' });
  }
};

export const searchByMonthYear = async (req, res) => {
  const { month, year } = req.query;
  try {
    const students = await prisma.student.findMany({
      where: {
        fees: {
          some: { month, year: parseInt(year, 10) },
        },
      },
      include: { fees: true },
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students by month and year' });
  }
};

export const searchByFilters = async (req, res) => {
  const { classId, sessionId, status, month, year } = req.query;
  try {
    const students = await prisma.student.findMany({
      where: {
        AND: [
          classId && {
            Enrollments: {
              some: { Sclass_id: parseInt(classId, 10) },
            },
          },
          sessionId && {
            Enrollments: {
              some: { session_id: parseInt(sessionId, 10) },
            },
          },
          status && {
            fees: {
              some: { status },
            },
          },
          month && year && {
            fees: {
              some: { month, year: parseInt(year, 10) },
            },
          },
        ],
      },
      include: { fees: true },
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students by filters' });
  }
};


//Get Fee Detail
 export const getFeesByStudentId = async (req, res) => {
  const { studentId } = req.params;
  try {
    const fees = await prisma.fee.findMany({
      where: { student_id: parseInt(studentId) },
      include: { session: true },
    });
    res.json(fees);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching fees' });
  }
};

 export const getFeesBySessionId = async (req, res) => {
  const { sessionId } = req.params;
  try {
    const fees = await prisma.fee.findMany({
      where: { fee_session_id: parseInt(sessionId) },
      include: { student: true },
    });
    res.json(fees);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching fees' });
  }
};


// PUT, POST, DELETE
 export const addFee = async (req, res) => {
  const { student_id, month, year, fee_session_id, amount, status } = req.body;
  try {
    const newFee = await prisma.fee.create({
      data: {
        student_id,
        month,
        year,
        fee_session_id,
        amount,
        status,
      },
    });
    res.status(201).json(newFee);
  } catch (error) {
    res.status(500).json({ error: 'Error creating fee' });
  }
};

export const updateFee = async (req, res) => {
  const { feeId } = req.params;
  const { amount, status } = req.body;
  try {
    const updatedFee = await prisma.fee.update({
      where: { fee_id: parseInt(feeId) },
      data: {
        amount,
        status,
        paid_date: status === 'Paid' ? new Date() : null,
      },
    });
    res.json(updatedFee);
  } catch (error) {
    res.status(500).json({ error: 'Error updating fee' });
  }
};

export const deleteFee = async (req, res) => {
  const { feeId } = req.params;
  try {
    await prisma.fee.delete({
      where: { fee_id: parseInt(feeId) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting fee' });
  }
};
