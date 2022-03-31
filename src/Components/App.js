import React, { useEffect, useState } from "react";
import VideoPage from "./VideoPage";
import Header from "./Header";
import { Switch, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import "../App.css";
import Login from "./Login";

function App() {
    const [videos, setVideos] = useState([])
    const [searchVid, setSearchVid] = useState("")


    useEffect(() => {
        fetch(" ")
            .then((r) => r.json())
            .then(data => setVideos(data))
    }, [])

    const updatedVideos = (video) =>
        setVideos([...videos, video])

    const filteredVideos = videos.filter(({ }) =>

    
    )

    const [page, setPage] = useState("/");

    return (
        <div className="App">
            <Header onChangePage={setPage} />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route path="/videos">
                    <VideoPage
                        setSearchVid={setSearchVid}
                        videos={filteredVideos}
                    />
                </Route>
            </Switch>
        </div>

    )
}

export default App; 