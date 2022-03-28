import React from "react";
import VideoCollection from "./VideoCollection";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function VideoPage({ setSearchVid, videos }) {





    return (
        <Container textAlign={"center"}>
            <h1 style={{ fontFamily: "Cinzel Decorative" }}> Videos for Rent</h1>
            <br />
            <Search setSearchVid={setSearchVid} />
            <br />
            <CharacterCollection videos={videos} />
        </Container>
    )
}
export default VideoPage;