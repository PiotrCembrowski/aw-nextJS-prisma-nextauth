import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamicParams = true;

export async function GET(req: Request, res: Response) {
  const name = req.url;
  const lastPart = name.substring(name.lastIndexOf("/") + 1);

  let continent;

  if (lastPart.search("Asia")) {
    continent = await prisma.country.findMany({
      where: {
        continent: "Asia",
      },
    });
  }

  return NextResponse.json(
    { message: `continent of ${lastPart}`, list: continent },
    { status: 200 }
  );
}
