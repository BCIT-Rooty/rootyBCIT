import Head from "next/head";
import { FlexBox, Wrapper, ImgPlaceholder } from "../styles/globals";
import Button from "../components/button";
import { useRouter } from "next/router";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Home() {
  const r = useRouter();
  return (
    <Wrapper
      dir="column"
      bgColor="#FFFDFA"
      overflowX="hidden"
      overflowY="hidden"
    >
      <Head>
        <title>Welcome to Rooty</title>
      </Head>

      <FlexBox>
        <Button
          txt="Register"
          onClick={() => {
            r.push("/register");
          }}
          bgColor="#4F4DB0"
        ></Button>

        <Button
          txt="Log In"
          onClick={() => {
            signIn();
          }}
          bgColor="#4F4DB0"
        ></Button>
      </FlexBox>
    </Wrapper>
  );
}

export async function getServerSideProps(context) {
  // const session = await getSession(context);
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }
  let sessionUserObj = JSON.parse(JSON.stringify(sessionUser));
  return {
    props: { session, sessionUserObj },
  };
}
