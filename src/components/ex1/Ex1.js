import React from 'react';
import Ex1Inner from "./Ex1Inner";
import {Container} from "@mui/material";

function Ex1(props) {

    return (
        <>
            <h1>Ex1 Component</h1>
            <Container style={{display:'flex'}} >
                <Ex1Inner file={ require(`../../images/s_IMG01.jpg`)} title={"메뉴1"}></Ex1Inner>
                <Ex1Inner file={ require(`../../images/s_IMG02.jpg`)} title={"메뉴2"}></Ex1Inner>
                <Ex1Inner file={ require(`../../images/s_IMG03.jpg`)} title={"메뉴3"}></Ex1Inner>
            </Container>
        </>
    );
}

export default Ex1;