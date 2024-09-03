"use server";

import { auth } from "@/auth";
import { cache } from "react";

export const getSession = cache(async () => {
  const session = await auth();
  const user = session?.user;
  if (user) {
    console.log("user loaded");
  }
  // console.log("--------", session);

  return session;
});
