import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { prisma } from "../../../server/db/client";
// import {jwtSign} from "jwt-next-auth"

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days-
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("authorize", credentials);
        const dbUser = await prisma.user.findUnique({
          where: {
            email: credentials.username,
          },
        });
        console.log("DB USERRR AYYYYYYYY", dbUser);
        console.log("CREDENTIALS", credentials);

        if (dbUser) {
          delete dbUser.password;
          console.log(dbUser);
          return dbUser;
        } else {
          return null;
        }
      },
    }),
  ],
  // debugger: true,
};

export default NextAuth(authOptions);
