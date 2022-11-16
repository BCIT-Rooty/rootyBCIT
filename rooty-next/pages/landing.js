import Link from "next/link"

export default function Landing() {
    return (
        <>
            <h1>Rooty</h1>
            <p>Rooty is a social media platform for gardeners to share their gardening experiences and learn from others.</p>

            <h2>Register</h2>
            <Link href='/register'>Register</Link>

            <h4>Have an account?</h4>
            <Link href='/login'>Log In</Link>



        </>
    )
}
