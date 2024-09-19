-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "continentContinent_id" TEXT;

-- CreateTable
CREATE TABLE "Continent" (
    "continent_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "costs" INTEGER,

    CONSTRAINT "Continent_pkey" PRIMARY KEY ("continent_id")
);

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_continentContinent_id_fkey" FOREIGN KEY ("continentContinent_id") REFERENCES "Continent"("continent_id") ON DELETE SET NULL ON UPDATE CASCADE;
