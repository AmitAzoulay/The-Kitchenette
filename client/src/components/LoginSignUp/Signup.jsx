import React, { useState } from "react";
import './Signup.css';
import axios from "axios";

const Signup = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [DisplayName,setDisplayName] = useState("")
    const handleSignup = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/Signup',{DisplayName, email, password})
        console.log("Signup email:", email, "password: ", password).then(result => console.log(result)).catch(err => console.log(err))
    }
    return (
       <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
            <input
                type="DisplayName"
                placeholder="Enter Display Name"
                value={DisplayName}
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
