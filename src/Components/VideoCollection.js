import React from "react";
import VideoCard from "./VideoCard";
import DetailPage from "./DetailPage";

function VideoCollection({ videos }) {
    // {
    //     const card = Object.keys(videos).map((videoObj) => (
    //         <VideoCard key={videoObj.id} videos={videoObj} />
    //     ))
    //     console.log(card)
    // }


    return (


        < div className="video-collection">
            <ul className="cards">{videos.map((videoObj) => <VideoCard key={videoObj.id} {...videoObj} />)}</ul>

            <ul className="cards">{videos.map((videoObj) => <DetailPage key={videoObj.id} {...videoObj} />)}</ul>
        </div >

    )
}




export default VideoCollection;


// {Object.keys(videos).map((videoObj) => (
//     <VideoCard key={videoObj.id} videos={videoObj} />
// ))
// }