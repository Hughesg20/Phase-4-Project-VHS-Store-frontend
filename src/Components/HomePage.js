import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";

function HomePage({ user }) {

    


    return (
        <div align="center" className="homepage">
            <h1> Welcome to VHS Store </h1>
            

            {
                !user && (
                    <div className="signup-container">
                        <NavLink to="/signup">
                            <button> SignUp </button>
                        </NavLink>
                        <NavLink to="/login">
                            <button> Login </button>
                        </NavLink>
                    </div>

                )
            }
        </div>
    )
}
export default HomePage;