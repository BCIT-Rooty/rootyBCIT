import { prisma } from "../../server/db/client";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;

  console.log("SESSION BISH", session);

  if (!session) {
    res
      .status(401)
      .json({ message: "You are not authorized to view this page" });
    return;
  }

  switch (method) {
    case "POST":
      // get the title and content from the request body
      const { name, lastname, email, password, aboutMe, category } = req.body;

      break;
    case "GET":
      const user = await prisma.user.findUnique({
        where: {
          email: session?.user.email,
        },
      });
      res.status(200).json(user);

      break;
    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
