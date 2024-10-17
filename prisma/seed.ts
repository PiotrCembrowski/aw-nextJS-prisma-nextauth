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

  const Country_costs: Prisma.Country_costsCreateInput[] = await [
    {
      country_name: "Brazil",
      costs_one_person: 806,
      costs_family: 2415,
      hotel_cost_min: 8,
      hotel_cost_max: 115,
      apartment_cost_min: 146,
      apartment_cost_max: 1100,
      dinner_cost: 6,
      car_rent: 15,
    },
    {
      country_name: "Mexico",
      costs_one_person: 1179,
      costs_family: 3354,
      hotel_cost_min: 30,
      hotel_cost_max: 300,
      apartment_cost_min: 208,
      apartment_cost_max: 2337,
      dinner_cost: 9,
      car_rent: 5,
    },
  ];

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

  // const User: Prisma.UserCreateInput = await {
  //   email: "losttape@gmail.com",
  //   password: "123",
  //   userName: "piotr",
  // };

  // await prisma.user.create({
  //   data: User,
  // });

  // console.log(`Created user with id: ${user.id}`);

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
