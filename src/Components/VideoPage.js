import React from "react";
import VideoCollection from "./VideoCollection";




function VideoPage({ videos, setVideos, user }) {





    return (
        
        <div>
            <h1 align="center">Videos</h1>
            <div className="videos">
            {user? <VideoCollection videos={videos} />: <h1>please log in</h1> } 
            </div>

        </div>
    )
}
export default VideoPage;