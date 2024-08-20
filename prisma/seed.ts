import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     email: "losttape@gmail.com",
  //     password: "1234",
  //     name: "Piotr",
  //     posts: {
  //       create: {
  //         title: "Check out Prisma with Next.js",
  //         content: "https://www.prisma.io/nextjs",
  //         published: false,
  //       },
  //     },
  //   },
  // });

  console.log("Start seeding...");
  // console.log(`Created user with id: ${user.id}`);

  console.log(`Seeding finished.`);

  const userRead = await prisma.user.findUnique({
    where: {
      email: "losttape@gmail.com",
    },
  });

  console.log(userRead);
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
