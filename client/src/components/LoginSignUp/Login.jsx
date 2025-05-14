import React, { useState } from "react";
import './Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login',{email, password})
        .then(result => {
            if(result.status == 201)
            {
                localStorage.setItem('token', result.data.token)
                navigate('/chat')
            }  
            else
            {
                alert('The information you provided may be incorrect. Please check your inputs and try again.')
            }
        })
        .catch(err => {
            if (err.response && err.response.status === 401) {
                alert('Invalid email or password.');
            } else {
                alert('Something went wrong. Please try again later.');
            }
        });
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
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login