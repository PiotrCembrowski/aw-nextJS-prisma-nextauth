import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  const Continent: Prisma.ContinentCreateInput[] = await [
    {
      name: "Asia",
      costs: 9000,
      countries: {
        create: [],
      },
    },
  ];

  const Countries: Prisma.CountryCreateInput[] = await [
    {
      name: "China",
      costs: 2500,
      continent: "Asia",
      cities: {
        create: [
          {
            name: "Beijing",
            costs: 3500,
            posts: {},
          },
          {
            name: "Hong Kong",
            costs: 3500,
            posts: {},
          },
        ],
      },
    },
    {
      name: "Japan",
      costs: 4100,
      continent: "Asia",
      cities: {
        create: [
          {
            name: "Tokio",
            costs: 6000,
            posts: {},
          },
          {
            name: "Saitama",
            costs: 4100,
            posts: {},
          },
          {
            name: "Osaka",
            costs: 4100,
            posts: {},
          },
        ],
      },
    },
    {
      name: "Poland",
      costs: 750,
      continent: "Europe",
      cities: {
        create: [
          {
            name: "Warsaw",
            costs: 1000,
            posts: {},
          },
          {
            name: "Cracow",
            costs: 500,
            posts: {},
          },
          {
            name: "Poznań",
            costs: 500,
            posts: {},
          },
          {
            name: "Wrocław",
            costs: 500,
            posts: {},
          },
          {
            name: "Lublin",
            costs: 500,
            posts: {},
          },
        ],
      },
    },
  ];

  console.log("Seeding countries...");

  Countries.forEach(async (country) => {
    await prisma.country.create({
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
