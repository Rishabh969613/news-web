import React, { useState } from 'react'
import './Signup.css'

import { Link, useNavigate } from "react-router-dom";



const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        const body = {
            username: name,  // Backend expects 'username'
            email: email,
            password: password
        };

        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            const data = await res.json();

            if (res.ok) {
                alert("Signup successful!");
                navigate('/Login');
                console.log("User data:", data);
            } else {
                alert("Signup failed: " + data);
                console.error("Error:", data);
            }
        } catch (error) {
            console.error("Server error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <>
            {/* //      <div className="login-modal">
//     <div className="login-box">
//       <div class="left">
//         <h2>Welcome</h2>
//         <p>Please sign up using your personal information to stay connected with us.</p>
//       </div>
//       <div className="right">
//         <h2>SIGN UP</h2>
//         <input type="name" placeholder="First Name"/>
//         <input type="name" placeholder="Last Name"/>
//         <input type="password" placeholder="Create your password"/>
//         <input type="password" placeholder="Confirm your password"/>
//         <input type="email" placeholder="Email"/>
//         <button   className="submit">Sign Up</button>
//         <p className="signup-text">Already have an account? </p>
//       </div>
//     </div>
//   </div> */}

            <div className='sign-container'>
                <div className="signup-box">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <label htmlFor="name">Name</label>

                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="submit">Create Account</button>

                        <p className="login-link">Already have an account?<Link to="/Login"> Login</Link></p>
                    </form>
                </div>
            </div>


        </>

    )
}

export default Signup