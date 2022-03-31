import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login({ setCurrentUser, setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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


    )
}
export default Login;