import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const citiesData: Array<Prisma.CityCreateInput> = [
    {
      name: "Warsaw",
      posts: {},
    },
  ];

  const dataCities: Prisma.UserCreateInput[] = [
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
