import React from 'react';
import {Card, CardContent, CardHeader, CardMedia} from "@mui/material";

function Ex1Inner({file, title}) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={'Card Header'}></CardHeader>
            <CardMedia
                component="img"
                height="194"
                image={file}
                alt="Paella dish"
            />
            <CardContent>
                {title}
            </CardContent>
        </Card>
    );
}

export default Ex1Inner;