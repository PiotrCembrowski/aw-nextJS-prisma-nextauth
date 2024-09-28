/*
  Warnings:

  - Made the column `country` on table `City` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "City" ALTER COLUMN "country" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_countryCountry_id_fkey" FOREIGN KEY ("countryCountry_id") REFERENCES "Country"("country_id") ON DELETE SET NULL ON UPDATE CASCADE;
