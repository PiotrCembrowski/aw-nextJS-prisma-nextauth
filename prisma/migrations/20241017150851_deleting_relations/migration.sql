/*
  Warnings:

  - You are about to drop the column `country_id_ref` on the `Country_costs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "City_costs" DROP CONSTRAINT "City_costs_city_id_ref_fkey";

-- DropForeignKey
ALTER TABLE "Country_costs" DROP CONSTRAINT "Country_costs_country_costs_id_fkey";

-- AlterTable
ALTER TABLE "Country_costs" DROP COLUMN "country_id_ref";
