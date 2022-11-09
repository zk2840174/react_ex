import React from 'react';
import SampleLayout from "../layouts/SampleLayout";
import {Grid, Typography} from "@mui/material";

function MainPage(props) {
    return (
        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid item xs={12}>
                    <Typography variant={'h4'}>Main Page</Typography>
                </Grid>
            </Grid>
        </SampleLayout>
    );
}

export default MainPage;