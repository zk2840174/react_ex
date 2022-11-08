import React, {useState} from 'react';
import SampleLayout from "../../layouts/SampleLayout";
import {Grid} from "@mui/material";
import TodoRegister from "../../components/todo/TodoRegister";

function TodoRegisterPage(props) {

    return (
        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid item xs={12} >
                    <TodoRegister></TodoRegister>
                </Grid>
            </Grid>
        </SampleLayout>
    );
}

export default TodoRegisterPage;