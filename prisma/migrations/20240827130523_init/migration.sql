-- CreateTable
CREATE TABLE "Country" (
    "country_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "costs" INTEGER NOT NULL,
    "continent" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("country_id")
);

-- CreateTable
CREATE TABLE "City" (
    "city_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "costs" INTEGER NOT NULL,
    "countries_country_id" TEXT,

    CONSTRAINT "City_pkey" PRIMARY KEY ("city_id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT,
    "cities_city_id" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "img" TEXT,
    "authProviderId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_countries_country_id_fkey" FOREIGN KEY ("countries_country_id") REFERENCES "Country"("country_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_cities_city_id_fkey" FOREIGN KEY ("cities_city_id") REFERENCES "City"("city_id") ON DELETE SET NULL ON UPDATE CASCADE;
