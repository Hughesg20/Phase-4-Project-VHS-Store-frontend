import React, { useEffect, useState } from "react";
import VideoPage from "./VideoPage";
import Header from "./Header";
import { Switch, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "../App.css";
import Login from "./Login";

function App() {
    const [videos, setVideos] = useState([])
    const [user, setUser] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        fetch(" ")
            .then((r) => r.json())
            .then(data => setVideos(data))
    }, [])


    return (
        <div className="App">
            {user && <NavBar />}
            <Routes>
                <Route exact path="/">
                    <HomePage user={user} />


                    <Route path="/videos"
                        element={<VideosCollection videos={videos} />}
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
                        element={<Login setUser={setUser} navigate={navigate} />}
                    />
/>

            </Routes>

        </div>

    )
}

export default App; 