import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
let citiesData: Array<Prisma.CityCreateInput>;

async function main() {
  citiesData = [
    {
      name: "Warsaw",
      posts: {},
    },
  ];

  const dataCities: Prisma.CountryCreateInput[] = [
    {
      name: "Poland",
      cities: citiesData,
    },
  ];

  const country = await prisma.user.create({
    data: dataCities,
  });

  console.log("Start seeding...");
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
