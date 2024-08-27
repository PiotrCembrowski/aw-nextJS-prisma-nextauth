"use server";

import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const register = async (formData: FormData) => {
  const userName = formData.get("username") as string;
  const email = formData.get("useremail") as string;
  const password = formData.get("userpassword") as string;
  const passwordRepeated = formData.get("userpasswordrepeated") as string;

  console.log(userName, email, password, passwordRepeated);

  if (!userName || !email || !password || !passwordRepeated) {
    throw new Error("Please fill all fields.");
  }

  //  existing user

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) throw new Error("User already exist.");

  const hashedPassword = await hash(password, 12);

  await await prisma.user.create({
    data: {
      userName,
      email,
      password: hashedPassword,
    },
  });

  const showuser = await prisma.user.findMany();
  await console.log(showuser);
  console.log("User created successfully.");

  redirect("/");
};

export { register };
