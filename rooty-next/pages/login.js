import * as React from "react";
import LoginForm from "../components/loginForm";
import { useRouter } from "next/router";
import NextAuthLogInButton from "../components/login/login-btn";

export default function Home() {
  let r = useRouter();

  return (
    <>
      <NextAuthLogInButton />
    </>
  );
}
