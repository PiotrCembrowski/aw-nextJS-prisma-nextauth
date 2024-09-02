import { PrismaClient } from "@prisma/client";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin(
            "Please provide both email and password."
          );
        }

        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
          select: {
            id: true,
            userName: true,
            email: true,
            password: true,
          },
        });

        if (!user) {
          throw new Error("Invalid email or password.");
        }

        if (!user.password) {
          throw new Error("Invalid password.");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password didn't matched.");
        }

        const userData = {
          name: user.userName,
          email: user.email,
          id: user.id,
        };

        return userData;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },

  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.email) {
        session.user.id = token.sub;
        session.user.email = token.email;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },

    signIn: async ({ account }: any) => {
      if (account?.provider == "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
