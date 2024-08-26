"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const register = async (formData: FormData) => {
  const username = formData.get("username") as String;
  const email = formData.get("useremail") as String;
  const password = formData.get("userpassword") as String;
  const passwordRepeated = formData.get("userpasswordrepeated") as String;

  console.log(username, email, password, passwordRepeated);

  if (!username || !email || !password || !passwordRepeated) {
    throw new Error("Please fill all fields.");
  }

  //  existing user

  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export { register };
