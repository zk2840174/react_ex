import React from 'react';
import SampleLayout from "../../layouts/SampleLayout";
import {Grid} from "@mui/material";

import {useParams} from "react-router-dom";
import TodoModify from "../../components/todo/TodoModify";

function TodoModifyPage(props) {

    const {id} = useParams()


    return (
        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid item xs={12} >
                    <TodoModify id={id}></TodoModify>
                </Grid>
            </Grid>
        </SampleLayout>
    );
}

export default TodoModifyPage;