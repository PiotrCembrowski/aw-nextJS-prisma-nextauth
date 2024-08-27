import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        emaail: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
});
