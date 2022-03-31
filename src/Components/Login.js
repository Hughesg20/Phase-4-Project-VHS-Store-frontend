import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";

function Login({ setCurrentUser, setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((r) => r.json())
            .then(() => {
                fetch("/authorized_user").then((res) => {
                    if (res.ok) {
                        res.json().then((user) => {
                            setIsAuthenticated(true);
                            setCurrentUser(user);

                            navigate("/home");
                        });
                    } else {
                        alert("Incorrect Username or Password");
                    }
                });
            });
    }

    return (
        <div>
            <div className="form">
                <form className="login-form" onSubmit={(e) => handleLogin(e)}>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        placeholder="username"
                        onChange={(e) => handleUsername(e)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => handlePassword(e)}
                    />
                    <div align="center" className="feed-me">
                        <button type="submit">Feed Me</button>
                    </div>
                    <NavLink to="/signup">
                        <div align="center" className="Signup">
                            <button> SignUp </button>
                        </div>
                    </NavLink>
                </form>
            </div>

        </div>

    )
}
export default Login;