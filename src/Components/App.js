import React, { useEffect, useState } from "react";
import VideoPage from "./VideoPage";
import Header from "./Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "../App.css";
import Login from "./Login";
import VideoCollection from "./VideoCollection";
import Signup from "./Signup";
import LogOut from "./LogOut";
import Profile from "./Profile"
import DetailPage from "./DetailPage";

function App() {
    const [videos, setVideos] = useState([])
    const [user, setUser] = useState(null)

    const navigate = useNavigate()


    useEffect(() => {
        fetch("http://localhost:4000/clients")
            .then((r) => r.json())
            .then(console.log)
    }, [user])

    useEffect(() => {
        fetch("http://localhost:4000/vhs_tapes")
            .then((r) => r.json())
            .then(setVideos)
    }, [user])


    return (
        <div className="App">
            {<Header />}
            <Routes>
                <Route path="/"
                    element={<HomePage videos={videos} user={user} />}
                />

                <Route path="/videos"
                    element={<VideoPage videos={videos} setVideos={setVideos} />}
                />

                <Route
                    path="/videos/:id"
                    element={
                        <DetailPage
                            videos={videos}
                            user={user}
                            setUser={setUser}

                        />
                    }
                />

                <Route path="/login"
                    element={<Login setUser={setUser} />}
                />

                <Route path="/signup"
                    element={<Signup setUser={setUser} navigate={navigate} />}
                />

                <Route
                    path="/logout"
                    element={<LogOut setUser={setUser} navigate={navigate} />}
                />
                <Route
                    path="/profile"
                    element={<Profile user={user} setUser={setUser} />}
                />




            </Routes>

        </div>

    )
}

export default App; 