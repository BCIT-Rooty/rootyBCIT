import { prisma } from "../../server/db/client";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  const session = await unstable_getServerSession(req, res, authOptions);
  console.log("SESSION BISH", session);

  switch (method) {
    case "POST":
      break;
    case "GET":
      if (session) {
        const user = await prisma.user.findUnique({
          where: {
            email: session.user.email,
          },
        });
        res.status(200).json(user);
      } else {
        res.status(200).json({ message: "no session" });
      }
      break;
    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
