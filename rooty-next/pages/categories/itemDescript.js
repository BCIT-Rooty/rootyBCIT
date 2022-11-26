import ItemDescription from "../../components/itemDescript";
import ItemDescNavbar from "../../components/navbar/itemDescNavbar";
// import { unstable_getServerSession } from "next-auth/next";
// import { authOptions } from "../api/auth/[...nextauth]";

export default function ItemDescript() {
  return (
    <Wrapper alignItems="flex-start">
      <ItemDescription></ItemDescription>
      <ItemDescNavbar></ItemDescNavbar>
    </Wrapper>
  );
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
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   let sessionObj = JSON.parse(JSON.stringify(session));

//   return {
//     props: {
//       sessionObj,
//     },
//   };
// }
