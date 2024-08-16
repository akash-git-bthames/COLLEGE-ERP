/*
  Warnings:

  - You are about to drop the column `class_teacher_id` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `class_id` on the `Enrollment` table. All the data in the column will be lost.
  - You are about to drop the column `class` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `class_Roll_number` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `section` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[student_id,Sclass_id,subject_id,session_id]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Sclass_id` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentClass_Roll_number` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_class_teacher_id_fkey";

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_session_id_fkey";

-- DropForeignKey
ALTER TABLE "Enrollment" DROP CONSTRAINT "Enrollment_class_id_fkey";

-- DropIndex
DROP INDEX "Enrollment_student_id_class_id_subject_id_session_id_key";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "class_teacher_id",
ADD COLUMN     "Sclass_teacher_id" INTEGER;

-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "class_id",
ADD COLUMN     "Sclass_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "class",
DROP COLUMN "class_Roll_number",
DROP COLUMN "section",
ADD COLUMN     "currentClass_Roll_number" INTEGER NOT NULL,
ADD COLUMN     "currentSClass" TEXT;

-- DropTable
DROP TABLE "Class";

-- CreateTable
CREATE TABLE "SClass" (
    "Sclass_id" SERIAL NOT NULL,
    "Sclass_name" TEXT NOT NULL,
    "Sclass_teacher_id" INTEGER NOT NULL,
    "session_id" INTEGER NOT NULL,

    CONSTRAINT "SClass_pkey" PRIMARY KEY ("Sclass_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SClass_Sclass_name_key" ON "SClass"("Sclass_name");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_student_id_Sclass_id_subject_id_session_id_key" ON "Enrollment"("student_id", "Sclass_id", "subject_id", "session_id");

-- AddForeignKey
ALTER TABLE "SClass" ADD CONSTRAINT "SClass_Sclass_teacher_id_fkey" FOREIGN KEY ("Sclass_teacher_id") REFERENCES "Teacher"("teacher_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SClass" ADD CONSTRAINT "SClass_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session"("session_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_Sclass_id_fkey" FOREIGN KEY ("Sclass_id") REFERENCES "SClass"("Sclass_id") ON DELETE RESTRICT ON UPDATE CASCADE;
