import { PrismaClient } from "@prisma/client";
import { usePathname } from "next/navigation";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = "force-static";

export const dynamicParams = true;

export async function GET(req: Request, res: Response) {
  const pathName = usePathname();
  const name = req.url;

  console.log(name);
  return NextResponse.json({ message: `country of ${name}` }, { status: 200 });
}

export async function DELETE(req: Request, res: Response) {
  const name = req.body;
}
