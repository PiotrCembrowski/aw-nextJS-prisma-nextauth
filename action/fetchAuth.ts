"use server";

import { auth } from "@/auth";

export const getSession = async () => {
  const session = await auth();
  const user = session?.user;
  if (user) {
    console.log("user loaded");
  }
  console.log("--------", session);
};
