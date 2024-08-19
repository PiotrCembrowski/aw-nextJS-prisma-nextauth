-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "cities_city_id" TEXT;

-- CreateTable
CREATE TABLE "Country" (
    "country_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "costs" INTEGER NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("country_id")
);

-- CreateTable
CREATE TABLE "City" (
    "city_id" TEXT NOT NULL,
    "countries_country_id" TEXT,

    CONSTRAINT "City_pkey" PRIMARY KEY ("city_id")
);

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_countries_country_id_fkey" FOREIGN KEY ("countries_country_id") REFERENCES "Country"("country_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_cities_city_id_fkey" FOREIGN KEY ("cities_city_id") REFERENCES "City"("city_id") ON DELETE SET NULL ON UPDATE CASCADE;
