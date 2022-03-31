import React from "react";
import { NavLink } from "react-router-dom";


function HomePage({ user }) {



    return (
        <div align="center" className="homepage">
            <h1> Welcome to VHS Store </h1>
            <p>
                Login/signup is required to rent a video
            </p>
        </div>
    {
        !user && (
            <div className="signup-login-container">
                <NavLink to="/signup">
                    <button> SignUp </button>
                </NavLink>
                <NavLink to="/login">
                    <button> Login </button>
                </NavLink>
            </div>
        )
    }
}
export default HomePage;