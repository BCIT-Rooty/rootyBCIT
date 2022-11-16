import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Register() {
    const r = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        const data = {
            name: firstName,
            lastname: lastName,
            email: email,
            password: password
        }

        // VERIFY THE USER THRUOUGH A CONFIRMATION LINK SENT TO EMAIL...

        await axios.post('/api/register', data)
            .then((res) => {
                console.log('RESSS', res);
            }).catch(err => {
                console.log('ERRRR', err)
            });
    }

    return (
        <>
            <h1>Register</h1>

            <form onSubmit={registerUser}>
                <label>
                    First Name: <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name: <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>
                    Email: <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password: <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type='submit'>Register User</button>

                <Link href='/register'>Register</Link>
            </form>
        </>
    )
}