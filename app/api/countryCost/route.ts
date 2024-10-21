import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
  return NextResponse.json({ message: `country costs ` }, { status: 200 });
}
