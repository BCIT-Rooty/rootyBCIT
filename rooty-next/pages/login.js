import * as React from "react";

import { useRouter } from 'next/router'
import NextAuthLogInButton from '../components/login/login-btn'

export default function Home() {
    let r = useRouter();

    return (
        <div>
            <h1>Log In MF </h1>
            <NextAuthLogInButton />
        </div>
    )
}