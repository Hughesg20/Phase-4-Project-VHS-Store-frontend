import React from "react";
import VideoCollection from "./VideoCollection";

import { Container } from "semantic-ui-react";

function VideoPage({ }) {





    return (
        <Container textAlign={"center"}>
            <h1 style={{ fontFamily: "Cinzel Decorative" }}> Videos for Rent</h1>
            <br />
            <Search />
            <br />
            <CharacterCollection />
        </Container>

    )
}
export default VideoPage;