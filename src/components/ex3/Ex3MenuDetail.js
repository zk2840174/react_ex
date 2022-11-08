import React from 'react';
import {Card, Container, Typography} from "@mui/material";

function Ex3MenuDetail({menu}) {

    if(!menu){
        return(
            <Container>
                <Card>
                    <Typography variant={"h1"}>Not Selected</Typography>
                </Card>
            </Container>
        )
    }


    return (

        <Container>
            <Card>
                <Typography variant={"h3"}>Selected</Typography>
                <Typography variant={"h5"}>{menu.title}</Typography>
                <img src={menu.file}/>
            </Card>
        </Container>

    );
}

export default Ex3MenuDetail;