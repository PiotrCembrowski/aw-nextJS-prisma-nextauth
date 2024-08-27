"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const register = async (formData: FormData) => {
  const name = formData.get("username") as string;
  const email = formData.get("useremail") as string;
  const password = formData.get("userpassword") as string;
  const passwordRepeated = formData.get("userpasswordrepeated") as string;

  console.log(name, email, password, passwordRepeated);

  if (!name || !email || !password || !passwordRepeated) {
    throw new Error("Please fill all fields.");
  }

  //  existing user

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) throw new Error("User already exist.");

  await await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  const showuser = await prisma.user.findMany();
  await console.log(showuser);
  console.log("User created successfully.");

  redirect("/login");
};

export { register };
