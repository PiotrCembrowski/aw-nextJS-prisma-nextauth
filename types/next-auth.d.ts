import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      role: string | undefined | null | {};
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string | undefined | null | {};
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string | undefined | null | {};
  }
}
