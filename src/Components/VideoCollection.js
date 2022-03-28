import React from "react";
import VideoCard from "./VideoCard";
import { Card } from "semantic-ui-react";

function VideoCollection({ videos }) {

    const card = videos.map((videoObj) => (
        <VideoCard key={videoObj.id} videos={videoObj} />
    ))

    return <Card.Group itemsPerRow={5}>{card}</Card.Group>;

}




export default VideoCollection;