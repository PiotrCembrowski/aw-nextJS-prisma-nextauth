import { Prisma, PrismaClient } from "@prisma/client";
import { promises as fs } from "fs";

const prisma = new PrismaClient();

async function main() {
  const fileCountriesCosts = await fs.readFile(
    process.cwd() + "/data/CountriesCosts.json",
    "utf8"
  );

  const dataCountriesCosts = JSON.parse(fileCountriesCosts);

  console.log("Start seeding...");

  const Country_costs: Prisma.Country_costsCreateInput[] =
    await dataCountriesCosts;

  const Countries: Prisma.CountryCreateInput[] = await [
    {
      name: "China",
      continent: "Asia",
    },
    {
      name: "Japan",
      continent: "Asia",
    },
    {
      name: "Poland",
      continent: "Europe",
    },
  ];

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
