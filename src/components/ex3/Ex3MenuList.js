import React from 'react';
import {Card, CardContent, CardHeader, CardMedia, Container, Typography} from "@mui/material";

//메뉴의 목록과 클릭시 상위 컴포넌트에 전달
function Ex3MenuList({arr, selectMenu}) {

    const list = arr.map( ({file,title, id}) =>
        <Card sx={{ maxWidth: 345 }} key={id}>
            <CardMedia
                component="img"
                height="194"
                image={file}
                alt="Paella dish"
                onClick={() => selectMenu(id)}
            />
        </Card>
    )

    return (
        <Container style={{display:'flex'}}>
            {list}
        </Container>
    );
}

export default Ex3MenuList;