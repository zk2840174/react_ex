import React from 'react';
import SampleLayout from "../../layouts/SampleLayout";

import Ex3Container from "../../components/ex3/Ex3Container";
import {Grid} from "@mui/material";

function SamplePage(props) {
    return (
        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid xs={12}>
                    <Ex3Container></Ex3Container>
                </Grid>
            </Grid>
        </SampleLayout>
    );
}

export default SamplePage;