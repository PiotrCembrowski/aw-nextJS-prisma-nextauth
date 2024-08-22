import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = "force-static";

export const dynamicParams = true

export async function GET(req: Request, res: Response) {
  return NextResponse.json({ message: "Speciic country" }, { status: 200 });
}

export async function DELETE(req: Request, res: Response) {
  const countryName = req.
}
