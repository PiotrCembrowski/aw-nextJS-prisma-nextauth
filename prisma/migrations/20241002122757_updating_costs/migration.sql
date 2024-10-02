/*
  Warnings:

  - You are about to drop the column `costs_two_persons` on the `City_costs` table. All the data in the column will be lost.
  - You are about to drop the column `costs_two_persons` on the `Country_costs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "City_costs" DROP COLUMN "costs_two_persons";

-- AlterTable
ALTER TABLE "Country_costs" DROP COLUMN "costs_two_persons";
