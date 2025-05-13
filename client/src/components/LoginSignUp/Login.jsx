import React, { useState } from "react";
import './Login.css'



const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Signup email:", email, "password: ", password)
    }
    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </form>
            <botton type="submit">Login</botton>
        </div>
    )
}

export default Login