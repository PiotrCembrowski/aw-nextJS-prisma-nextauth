import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // const Europe: Prisma.CountryCreateInput[] = await [
  //   {
  //     name: "Poland",
  //     costs: 750,
  //     continent: "Europe",
  //     cities: {
  //       create: [
  //         {
  //           name: "Warsaw",
  //           costs: 1000,
  //           posts: {},
  //         },
  //         {
  //           name: "Cracow",
  //           costs: 500,
  //           posts: {},
  //         },
  //       ],
  //     },
  //   },
  // ];

  // console.log("Seeding countries...");

  // Europe.forEach(async (country) => {
  //   await prisma.country.create({
  //     data: country,
  //   });
  // });

  const states = await prisma.country.findMany();
  const cities = await prisma.city.findMany();

  console.log(states);
  console.log(cities);

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
