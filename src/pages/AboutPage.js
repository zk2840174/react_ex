import React from 'react';
import SampleLayout from "../layouts/SampleLayout";
import {Grid, Typography} from "@mui/material";

function AboutPage(props) {
    return (
        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid xs={12}>
                    <Typography variant={'h4'}>About Page</Typography>
                </Grid>
            </Grid>
        </SampleLayout>
    );
}

export default AboutPage;