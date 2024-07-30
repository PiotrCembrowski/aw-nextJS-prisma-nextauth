import prisma from "../lib/prisma";

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "losttape@gmail.com" },
    update: {},
    create: {
      email: "losttape@gmail.com",
      name: "losttape",
      password: `1234`,
    },
  });
  console.log({ user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
