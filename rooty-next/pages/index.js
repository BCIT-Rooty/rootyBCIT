import Head from "next/head";
import { FlexBox, Wrapper, ImgPlaceholder } from "../styles/globals";
import Button from "../components/button";
import { useRouter } from "next/router";
import Link from "next/link"

export default function Home() {
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
        <Link href="/register">
          <Button txt="Register" bgColor="#4F4DB0"></Button>
        </Link>

        <Link href="/login">
          <Button txt="Log In" bgColor="#4F4DB0"></Button>
        </Link>
      </FlexBox>
    </Wrapper>
  );
}
