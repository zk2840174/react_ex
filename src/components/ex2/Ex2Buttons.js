import React from 'react';
import {Button} from "@mui/material";

function Ex2Buttons({handleClick}) {

    return (
        <>
            <Button variant="contained" onClick={handleClick} >CLICK</Button>
        </>
    );
}

export default Ex2Buttons;