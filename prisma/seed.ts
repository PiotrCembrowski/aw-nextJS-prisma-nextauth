import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const Europe: Prisma.CountryCreateInput[] = [
    {
      name: "Poland",
      costs: 750,
      continent: "Europe",
      cities: {
        create: [
          {
            name: "Warsaw",
            posts: {},
          },
        ],
      },
    },
  ];

  const country = await prisma.user.create({
    data: Europe,
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
