/*
  Warnings:

  - Added the required column `costs` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `continent` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "costs" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "continent" TEXT NOT NULL;
