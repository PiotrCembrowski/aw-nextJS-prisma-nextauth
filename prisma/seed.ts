import { Prisma, PrismaClient } from "@prisma/client";
import { promises as fs } from "fs";

const prisma = new PrismaClient();

async function main() {
  // fetching files with json data

  const fileCountriesCosts = await fs.readFile(
    process.cwd() + "/data/CountriesCosts.json",
    "utf8"
  );

  const fileCountriesList = await fs.readFile(
    process.cwd() + "/data/CountryList.json",
    "utf8"
  );

  // parsing data from files

  const dataCountriesCosts = JSON.parse(fileCountriesCosts);
  const dataCountryList = JSON.parse(fileCountriesList);

  console.log("Start seeding...");

  // create country costs

  const Country_costs: Prisma.Country_costsCreateInput[] =
    await dataCountriesCosts;

  const Countries: Prisma.CountryCreateInput[] = await dataCountryList;

  console.log("Seeding countries...");

  Countries.forEach(async (country) => {
    await prisma.country.create({
      data: country,
    });
  });

  Country_costs.forEach(async (country) => {
    await prisma.country_costs.create({
      data: country,
    });
  });

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
