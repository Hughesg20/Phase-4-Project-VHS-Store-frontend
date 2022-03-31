import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Signup({ navigate, setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)


    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = { username: username, password: passwordConfirm }
        fetch(`/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((r) => r.json())
            .then(setUser)

        navigate('/')
    };

    return (

        <div>
            <h1 align="center">Signup</h1>
            <div className="login">
                <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        placeholder="username"
                        onChange={(e) => handleUsername(e)}
                    />
                    <label> Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => handlePassword(e)}
                    />
                    <div align="center" className="submit-login">
                        <button type="submit"> Signup </button>
                    </div>
                    <NavLink to="/login">
                        <div align="center" className="login">
                            <button> Login </button>
                        </div>
                    </NavLink>
                </form>
            </div>

        </div>
    )

}
export default Signup;