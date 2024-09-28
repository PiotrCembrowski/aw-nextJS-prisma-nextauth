-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_countries_country_id_fkey";

-- AlterTable
ALTER TABLE "City" ADD COLUMN     "country" TEXT,
ADD COLUMN     "countryCountry_id" TEXT;
