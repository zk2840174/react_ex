import React, {useState} from 'react';
import {Button, Container, Typography} from "@mui/material";
import Ex2Display from "./Ex2Display";
import Ex2Buttons from "./Ex2Buttons";

function Ex2(props) {

    const [num, setNum] = useState(1)

    const handleClick = () => {

        setNum(num +1)
    }

    return (
        <>
            <Container>
                <Ex2Display num={num}></Ex2Display>
                <Ex2Buttons handleClick={handleClick}></Ex2Buttons>
            </Container>
        </>
    );
}

export default Ex2;