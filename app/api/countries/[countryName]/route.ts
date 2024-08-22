import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = "force-static";

export const dynamicParams = true;

export async function GET(req: Request, res: Response) {
  const name = req.url;
  console.log(name);
}

export async function DELETE(req: Request, res: Response) {
  const name = req.body;
}
