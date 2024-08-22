import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = "force-static";

export async function GET(req: Request, res: Response) {
  return NextResponse.json({ message: "Speciic country" }, { status: 200 });
}
