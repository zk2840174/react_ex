import React, {useEffect, useState} from 'react';
import SampleLayout from "../../layouts/SampleLayout";
import {Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import {getTodo} from "../../apis/todoApi";
import TodoRead from "../../components/todo/TodoRead";
import TodoModify from "../../components/todo/TodoModify";


function TodoReadPage(props) {

    const {cmd, id} = useParams()

    const [todo, setTodo] = useState(null)

    useEffect(() => {

        getTodo(id).then(data => {
            setTodo(data)
        })

    },[id])


    const getComponent = ()  =>{

        if(cmd === 'read'){
            return <TodoRead todo={todo}></TodoRead>
        }else if(cmd ==='modify'){
            return <TodoModify todo={todo}></TodoModify>
        }
        return <></>
    }

    return (
        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid item xs={12} >
                    {getComponent()}
                </Grid>
            </Grid>
        </SampleLayout>
    );
}

export default TodoReadPage;