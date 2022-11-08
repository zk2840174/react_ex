import React from 'react';
import {AppBar,  Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function SampleLayout(props) {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={"/"}>HOME</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={"/about"}>ABOUT</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={"/todo/"}>Todo</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default SampleLayout;