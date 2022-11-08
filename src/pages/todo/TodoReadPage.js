import React from 'react';
import SampleLayout from "../../layouts/SampleLayout";
import {Grid, Typography} from "@mui/material";
import {useParams} from "react-router-dom";

function TodoReadPage(props) {

    const {id} = useParams()

    return (
        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid xs={12}>
                    <Typography variant={'h4'}>{id} Read Page</Typography>
                </Grid>
            </Grid>
        </SampleLayout>
    );
}

export default TodoReadPage;