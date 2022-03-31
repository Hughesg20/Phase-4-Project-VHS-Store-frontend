import React, { useEffect, useState } from "react";
import VideoPage from "./VideoPage";
import Header from "./Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "../App.css";
import Login from "./Login";
import VideoCollection from "./VideoCollection";
import Signup from "./Signup";


function App() {
    const [videos, setVideos] = useState([])
    const [user, setUser] = useState(null)
    // const navigate = useNavigate()


    // useEffect(() => {
    //     fetch(" ")
    //         .then((r) => r.json())
    //         .then(data => setVideos(data))
    // }, [])


    return (
        <div className="App">
            {user && <Header />}
            <Routes>
                <Route path="/"
                    element={<HomePage videos={videos} user={user} />}
                />

                <Route path="/videos"
                    element={<VideoCollection videos={videos} />}
                />

                <Route
                    path="/videos/:id"
                    element={
                        <VideoPage
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
                    element={<Signup setUser={setUser} />}
                />


            </Routes>

        </div>

    )
}

export default App; 