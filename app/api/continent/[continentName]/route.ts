import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamicParams = true;

export async function GET(req: Request, res: Response) {
  const name = req.url;
  const lastPart = name.substring(name.lastIndexOf("/") + 1);

  let continent;
  const queryName = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);

  if (name.search(lastPart)) {
    continent = await prisma.country.findMany({
      where: {
        continent: queryName,
      },
    });
  }

  await console.log(lastPart.toUpperCase());

  return NextResponse.json({ continent }, { status: 200 });
}
