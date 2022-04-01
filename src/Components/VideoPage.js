import React from "react";
import VideoCollection from "./VideoCollection";




function VideoPage({ videos, setVideos }) {





    return (
        <div>
            <h1 align="center">Videos</h1>
            <div className="videos">
                <VideoCollection videos={videos} />
            </div>

        </div>
    )
}
export default VideoPage;