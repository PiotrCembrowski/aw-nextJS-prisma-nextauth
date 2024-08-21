import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = "force-static";

export async function GET(req: Request, res: Response) {
  const countries = await prisma.country.findMany();

  return NextResponse.json({ message: "countries list" }, { status: 200 });
}

export async function POST(request: Request, reesponse: Response) {
  return;
}

export async function PUT(request: Request, reesponse: Response) {
  return;
}

export async function DELETE(request: Request, reesponse: Response) {
  return;
}
