import { Prisma, PrismaClient } from "@prisma/client";
import { promises as fs } from "fs";

const prisma = new PrismaClient();

async function main() {
  const fileAfrica = await fs.readFile(
    process.cwd() + "/data/Africa.json",
    "utf8"
  );
  const fileAsia = await fs.readFile(process.cwd() + "/data/Asia.json", "utf8");
  const fileEurope = await fs.readFile(
    process.cwd() + "/data/Europe.json",
    "utf8"
  );
  const fileLatinAmerica = await fs.readFile(
    process.cwd() + "/data/LatinAmerica.json",
    "utf8"
  );
  const fileOceania = await fs.readFile(
    process.cwd() + "/data/Oceania.json",
    "utf8"
  );

  const dataAfrica = JSON.parse(fileAfrica);
  const dataAsia = JSON.parse(fileAsia);
  const dataEurope = JSON.parse(fileEurope);
  const dataLatinAmerica = JSON.parse(fileLatinAmerica);
  const dataOceania = JSON.parse(fileOceania);

  console.log("Start seeding...");

  const Country_costs: Prisma.Country_costsCreateInput[] = await [];

  const Countries: Prisma.CountryCreateInput[] = await [
    {
      name: "China",
      costs: 2500,
      continent: "Asia",
    },
    {
      name: "Japan",
      costs: 4100,
      continent: "Asia",
    },
    {
      name: "Poland",
      costs: 820,
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
