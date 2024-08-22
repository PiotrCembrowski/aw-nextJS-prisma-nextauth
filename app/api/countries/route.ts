import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dynamic = "force-static";

export async function GET(req: Request, res: Response) {
  const countries = await prisma.country.findMany();

  return NextResponse.json({ list: countries }, { status: 200 });
}

export async function PUT(request: Request, reesponse: Response) {
  return;
}
