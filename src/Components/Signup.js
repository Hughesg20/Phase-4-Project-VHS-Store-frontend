import React, { useState } from "react";
import { NavLink } from "react-router-dom";


unction Signup({ navigate, setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleConfirm = (e) => setPasswordConfirm(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passwordMatch(password, passwordConfirm)) {
            alert('Your password and password confirmation do not match.')
            return false
        }
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
            <h1 align="center">Login</h1>


            )

}
            export default Signup;