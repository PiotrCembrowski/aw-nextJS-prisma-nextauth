import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const piotr = await prisma.user.upsert({
    where: { email: "losttape@gmail.com" },
    update: {},
    create: {
      email: "losttape@gmail.com",
      password: "1234",
      name: "piotrcembrowski",
      posts: {},
    },
  });
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
