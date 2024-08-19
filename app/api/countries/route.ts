import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(request: Request) {
  return NextResponse.json({ message: "countries list" }, { status: 200 });
}

export async function POST(request: Request) {
  return NextResponse.json(
    { message: "You have succsefullu post country info" },
    { status: 200 }
  );
}
