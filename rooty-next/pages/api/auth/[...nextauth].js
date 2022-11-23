import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { prisma } from "../../../server/db/client";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const dbUser = await prisma.user.findUnique({
          where: {
            email: credentials.username,
          },
        });
        console.log("DB USERRR AYYYYYYYY", dbUser);
        console.log("CREDENTIALS", credentials);

        // let hash = await bcrypt.hash(credentials.password, 10);

        if (dbUser) {
          console.log(dbUser);
          return dbUser;
        } else {
          return null;
        }

        // Add logic here to look up the user from the credentials suppliedw

        // if (credentials.username === "jsmith" && credentials.password === "secret") {
        //     return user
        // } else {
        //     return null
        // }
      },
    }),
  ],
  debugger: true,
};

export default NextAuth(authOptions);
