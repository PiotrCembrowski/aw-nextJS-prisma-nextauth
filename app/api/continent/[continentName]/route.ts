import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamicParams = true;

export async function GET(req: Request, res: Response) {
  const name = req.url;
  if (name.search("Asia")) {
    const continent = await prisma.continent.findUnique({
      where: {
        name: "Asia",
      },
    });
  }

  console.log(name);
  return NextResponse.json(
    { message: `continent of ${name}` },
    { status: 200 }
  );
}
