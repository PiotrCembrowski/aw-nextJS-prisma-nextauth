import { PrismaClient } from "@prisma/client";

export async function prisma() {
  const prisma = new PrismaClient();

  return prisma;
}
