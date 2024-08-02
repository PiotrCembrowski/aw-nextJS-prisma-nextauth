import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";
import { Request, Response } from "node-fetch";

function handler(req: Request, res: Response) {
  const data = req.body;

  const email: string = data?.email;
  const password: string = data?.password;

  const hashedPassword = hashPassword(password);

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }
}

export default handler;
