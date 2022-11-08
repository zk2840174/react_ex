import React from 'react';
import {Typography} from "@mui/material";

function Ex2Display({num}) {
    return (
        <>
            <Typography variant="h1" gutterBottom>
                {num}
            </Typography>
        </>
    );
}

export default Ex2Display;