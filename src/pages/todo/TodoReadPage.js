import React from 'react';
import SampleLayout from "../../layouts/SampleLayout";
import {Grid, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import TodoRead from "../../components/todo/TodoRead";

function TodoReadPage(props) {

    const {id} = useParams()



    return (
        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid item xs={12} >
                    <TodoRead id={id}></TodoRead>
                </Grid>
            </Grid>
        </SampleLayout>
    );
}

export default TodoReadPage;