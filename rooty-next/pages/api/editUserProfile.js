import { prisma } from "../../server/db/client";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    res
      .status(401)
      .json({ message: "You are not authorized to view this page" });
    return;
  }

  switch (method) {
    case "POST":
      // get the title and content from the request body
      const { firstName, lastName, aboutMe, program, photoUrl } = req.body;
      console.log("REQ BODY FROM EDIT USER API", req.body);
      // update the post in the database
      const changeUserInfo = await prisma.user.update({
        where: {
          email: session.user.email,
        },
        data: {
          name: firstName,
          lastName,
          aboutMe,
          program,
          image: photoUrl
        },
      });
      // find updated post in the database
      const updatedUser = await prisma.user.findUnique({
        where: {
          email: changeUserInfo.email,
        },
      });

      res.status(200).json(updatedUser);

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

// export async function getServerSideProps(context) {
//   const session = await unstable_getServerSession(
//     context.req,
//     context.res,
//     authOptions
//   );
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }
