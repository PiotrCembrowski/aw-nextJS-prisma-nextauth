import { PrismaClient } from "@prisma/client";

export async function prisma() {
  const client = new PrismaClient();

  return client;
}
