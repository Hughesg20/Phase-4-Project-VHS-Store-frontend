import React, { useCallback } from "react";
import { Embed, Container, Header, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function HomePage() {



    return (
        <Container>
            <Header
                style={{ fontFamily: "Cinzel Decorative" }}
                size="huge"
                textAlign="center"
            >
                VHS Store
            </Header>

            <Button
                style={{ marginBottom: 20 }}
                type="button"
                onClick={handleOnClick}
                circular={true}
            >
                View Videos
            </Button>


        </Container>
    );

}