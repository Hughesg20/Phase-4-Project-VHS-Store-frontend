import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Signup({ navigate, setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    
    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleFirstname = (e) => setFirstname(e.target.value)
    const handleLastname = (e) => setLastname(e.target.value)
    const handleAge = (e) => setAge(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePasswordConfirm = (e) => setPasswordConfirm(e.target.value)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password == passwordConfirm) {
        const newUser = { firstname: firstname, lastname: lastname, age: age, email: email, username: username, password: password }
        fetch(`http://localhost:4000/clients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((r) => r.json())
            .then(setUser)
        setSubmitted(true)
        
    }
    };

    return (

        <div>
            <h1 style = {{align:"center"}} >Signup</h1>
            <div className="login">
                <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
                    <label>Firstname</label>
                    <input
                        type="text"
                        value={firstname}
                        placeholder="Firstname"
                        onChange={(e) => handleFirstname(e)}
                    />
                    <br/>
                    <label> Lastname</label>
                    <input
                        type="lastname"
                        value={lastname}
                        placeholder="Lastname"
                        onChange={(e) => handleLastname(e)}
                    />
                    <br/>
                    <label>Age</label>
                    <input
                        type="text"
                        value={age}
                        placeholder="Age"
                        onChange={(e) => handleAge(e)}
                    />
                    <br/>
                    <label>Email</label>
                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => handleEmail(e)}
                    />
                    <br/>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => handleUsername(e)}
                    />
                    <br/>
                    <label>Password</label>
                    <input
                        type="text"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => handlePassword(e)}
                    />
                    <br/>
                    <label>Confirm Password</label>
                    <input
                        type="text"
                        value={passwordConfirm}
                        placeholder="Confirm Password"
                        onChange={(e) => handlePasswordConfirm(e)}
                    />
                    <div style={{align:"center"}} className="submit-signup">
                        <button type="submit"> Signup </button>
                    </div>
                    <div>
                        {submitted?<NavLink to="/signup">
                            <button> SignUp </button>
                        </NavLink> : null}
                        
                    </div>
                    
                    
                </form>
            </div>

        </div>
    )

}
export default Signup;