import React, {useEffect, useState} from 'react';
import SampleLayout from "../../layouts/SampleLayout";
import {Button, Grid } from "@mui/material";
import {useNavigate, useSearchParams} from "react-router-dom";
import {getTodoList} from "../../apis/todoApi";
import TodoList from "../../components/todo/TodoList";



function TodoListPage(props) {

    const [searchParams, setSearchParams] = useSearchParams()


    const navigate = useNavigate()

    const page = searchParams.get("page")
    const size = searchParams.get("size")


    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodoList().then(arr => {
            setTodos(arr)
        })

    },[page, size])


    return (

        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid item xs={12} >

                    <TodoList todos={todos}></TodoList>

                    <Button variant={"outlined"} onClick={() => {
                        setSearchParams({page: 112,size: 50,keyword: '한글'})
                    }}> MOVE</Button>

                    <Button variant={"outlined"} onClick={() => {
                        navigate("/todo/register")
                    }}> REGISTER</Button>
                </Grid>
            </Grid>



        </SampleLayout>

    );
}

export default TodoListPage;