/*
  Warnings:

  - The primary key for the `City` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `City` table. All the data in the column will be lost.
  - The primary key for the `Continent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Continent` table. All the data in the column will be lost.
  - The primary key for the `Country` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Country` table. All the data in the column will be lost.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Post` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - The required column `city_id` was added to the `City` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `continent_id` was added to the `Continent` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `country_id` was added to the `Country` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `post_id` was added to the `Post` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `user_id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "City" DROP CONSTRAINT "City_pkey",
DROP COLUMN "id",
ADD COLUMN     "city_id" TEXT NOT NULL,
ADD CONSTRAINT "City_pkey" PRIMARY KEY ("city_id");

-- AlterTable
ALTER TABLE "Continent" DROP CONSTRAINT "Continent_pkey",
DROP COLUMN "id",
ADD COLUMN     "continent_id" TEXT NOT NULL,
ADD CONSTRAINT "Continent_pkey" PRIMARY KEY ("continent_id");

-- AlterTable
ALTER TABLE "Country" DROP CONSTRAINT "Country_pkey",
DROP COLUMN "id",
ADD COLUMN     "country_id" TEXT NOT NULL,
ADD CONSTRAINT "Country_pkey" PRIMARY KEY ("country_id");

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "id",
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("post_id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- CreateTable
CREATE TABLE "Country_costs" (
    "country_costs_id" TEXT NOT NULL,
    "country_name" TEXT NOT NULL,
    "country_id_ref" TEXT NOT NULL,
    "costs_one_person" INTEGER NOT NULL,
    "costs_two_persons" INTEGER NOT NULL,
    "costs_family" INTEGER NOT NULL,
    "hotel_cost_min" INTEGER NOT NULL,
    "hotel_cost_max" INTEGER NOT NULL,
    "apartment_cost_min" INTEGER NOT NULL,
    "apartment_cost_max" INTEGER NOT NULL,
    "dinner_cost" INTEGER,
    "car_rent" INTEGER,

    CONSTRAINT "Country_costs_pkey" PRIMARY KEY ("country_costs_id")
);

-- CreateTable
CREATE TABLE "City_costs" (
    "city_costs_id" TEXT NOT NULL,
    "city_name" TEXT NOT NULL,
    "city_id_ref" TEXT NOT NULL,
    "costs_one_person" INTEGER NOT NULL,
    "costs_two_persons" INTEGER NOT NULL,
    "costs_family" INTEGER NOT NULL,
    "hotel_cost_min" INTEGER NOT NULL,
    "hotel_cost_max" INTEGER NOT NULL,
    "apartment_cost_min" INTEGER NOT NULL,
    "apartment_cost_max" INTEGER NOT NULL,
    "dinner_cost" INTEGER,
    "car_rent" INTEGER,

    CONSTRAINT "City_costs_pkey" PRIMARY KEY ("city_costs_id")
);

-- AddForeignKey
ALTER TABLE "Country_costs" ADD CONSTRAINT "Country_costs_country_costs_id_fkey" FOREIGN KEY ("country_costs_id") REFERENCES "Country"("country_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City_costs" ADD CONSTRAINT "City_costs_city_id_ref_fkey" FOREIGN KEY ("city_id_ref") REFERENCES "City"("city_id") ON DELETE RESTRICT ON UPDATE CASCADE;
