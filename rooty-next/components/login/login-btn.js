import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"

export default function NextAuthLogInButton() {
    const { data: session } = useSession()
    const r = useRouter()

    function handleSignIn() {
        signIn()
        r.push('/home')
    }



    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={handleSignIn}>Sign in</button>
        </>
    )
}