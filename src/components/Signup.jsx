import React from 'react'
import './Signup.css'
import { Outlet, Link } from "react-router-dom";
const Signup = () => {
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
                <div class="signup-box">
                    <h2>Sign Up</h2>
                    <form>
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />

                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />

                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter password" required />

                        <button type="submit">Create Account</button>

                        <p class="login-link">Already have an account? <a href="#">Log in</a></p>
                    </form>
                </div>
                </div>
            

        </>

    )
}

export default Signup