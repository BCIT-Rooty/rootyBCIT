import { prisma } from "../../server/db/client";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  const session = await unstable_getServerSession(req, res, authOptions);
  const sessionUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  switch (method) {
    case "POST":
      let { value } = req.body;
      console.log("VALUE", value);
      let updatingUser = await prisma.user.update({
        where: {
          userId: sessionUser.userId,
        },
        data: {
          status: value,
        },
      });
      let updatedUser = await prisma.user.findUnique({
        where: {
          userId: updatingUser.userId,
        },
      });
      res.status(200).json({ updatedUser });

      break;
    case "GET":
      break;
    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
