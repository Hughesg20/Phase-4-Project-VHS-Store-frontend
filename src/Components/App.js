import React, { useEffect, useState } from "react";
import VideoPage from "./VideoPage";

function App() {
    const [videos, setVideos] - useState([])



    useEffect(() => {
        fetch(" ")
            .then((r) => r.json())
            .then(setEntries)
    }, [])


    const [page, setPage] = useState("/");

    return (
        <div className="App">


            <Header onChangePage={setPage} />


            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>


        </div>

    )
}

export default App; 