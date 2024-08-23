import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  //Log the current request pathname
  console.log("Current path:", req.nextUrl.pathname);
  return NextResponse.next();
}
