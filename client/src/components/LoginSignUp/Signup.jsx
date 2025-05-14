import React, { useState } from "react";
import './Signup.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [displayName,setDisplayName] = useState("")
    const navigate = useNavigate()
    const handleSignup = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/Signup',{displayName, email, password,isAdmin: false})
        .then(result => {
            if(result.status == 201)
            {
                navigate('/Login')
            }  
            else
            {
                alert('The information you provided may be incorrect. Please check your inputs and try again.')
            }
        })
    }
    return (
       <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
            <input
                type="DisplayName"
                placeholder="Enter Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
            />
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
              <button type="submit">Signup</button>
        </form>
        
       </div>
    )
};

export default Signup;
