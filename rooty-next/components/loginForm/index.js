import { useState } from "react"
import {Icon} from 'semantic-ui-react';

export default function LoginForm({
    onLogin=()=>{},
    icons=false
}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password );
    };

    return (
        <form onSubmit={handleSubmit}>
            {icons && <Icon name="home" />}
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}