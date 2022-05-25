/*
  Warnings:

  - You are about to drop the column `gender` on the `Question` table. All the data in the column will be lost.
  - Added the required column `case` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question"
RENAME COLUMN "gender" TO "case";
