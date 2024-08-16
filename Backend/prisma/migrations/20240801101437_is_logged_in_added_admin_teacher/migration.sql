/*
  Warnings:

  - You are about to drop the column `username` on the `admin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[AdminName]` on the table `admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `AdminName` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "admin_username_key";

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "aadhar_number" SET DATA TYPE TEXT,
ALTER COLUMN "enrollment_date" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "isLoggedIn" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "admin" DROP COLUMN "username",
ADD COLUMN     "AdminName" TEXT NOT NULL,
ADD COLUMN     "isLoggedIn" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "admin_AdminName_key" ON "admin"("AdminName");
