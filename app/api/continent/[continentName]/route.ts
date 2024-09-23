import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamicParams = true;

export async function GET(req: Request, res: Response) {
  const name = req.url;
  const lastPart = name.substring(name.lastIndexOf("/") + 1);

  if (name.search("Asia")) {
    const continent = await prisma.country.findMany({
      where: {
        name: "Asia",
      },
    });
  }

  return NextResponse.json(
    { message: `continent of ${lastPart}` },
    { status: 200 }
  );
}
