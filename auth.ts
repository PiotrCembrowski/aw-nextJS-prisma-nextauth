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
    authorize: async(credentials) => {
      const email = credentials.emaail as string | undefined;
      const password = credentials.password as string | undefined;

      if(!email || !password) {
        throw new CredentialsSignin('Please provide both email and password.')
      }
    }
  ],
});
