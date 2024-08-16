/*
  Warnings:

  - A unique constraint covering the columns `[enrollment_number]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Made the column `Father_or_guardian_mobile_number` on table `Student` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `subjectTeacher_id` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "Father_or_guardian_aadhar_number" SET DATA TYPE TEXT,
ALTER COLUMN "Father_or_guardian_mobile_number" SET NOT NULL,
ALTER COLUMN "Father_or_guardian_mobile_number" SET DATA TYPE TEXT,
ALTER COLUMN "Mother_phone_number" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "subjectTeacher_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Student_enrollment_number_key" ON "Student"("enrollment_number");

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_subjectTeacher_id_fkey" FOREIGN KEY ("subjectTeacher_id") REFERENCES "Teacher"("teacher_id") ON DELETE RESTRICT ON UPDATE CASCADE;
