import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(req: Request, res: Response) {
  return NextResponse.json({ message: "countries list" }, { status: 200 });
}

export async function POST(request: Request, reesponse: Response) {
  const formData = await request.formData();
  const name = formData.get("name");
  return Response.json({ name });
}