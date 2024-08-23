import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //Log the current request pathname
  console.log("Current path:", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: "/api/countries/:countryName",
};
