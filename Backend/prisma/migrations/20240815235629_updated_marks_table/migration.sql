/*
  Warnings:

  - You are about to drop the column `currentClass_Roll_number` on the `Student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[enrollment_id,assessmentType]` on the table `Mark` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currentSClass_Roll_number` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SClass_id` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enrollment" ALTER COLUMN "roll_number" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Mark" ADD COLUMN     "totalMarksOfSubject" DOUBLE PRECISION,
ALTER COLUMN "marksObtained" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "currentClass_Roll_number",
ADD COLUMN     "currentSClass_Roll_number" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "SClass_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Mark_enrollment_id_assessmentType_key" ON "Mark"("enrollment_id", "assessmentType");

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_SClass_id_fkey" FOREIGN KEY ("SClass_id") REFERENCES "SClass"("Sclass_id") ON DELETE RESTRICT ON UPDATE CASCADE;
