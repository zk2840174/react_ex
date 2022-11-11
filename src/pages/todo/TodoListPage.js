import React from 'react';
import SampleLayout from "../../layouts/SampleLayout";
import {Button, Grid} from "@mui/material";
import {useNavigate, useSearchParams} from "react-router-dom";
import TodoList from "../../components/todo/TodoList";

function TodoListPage(props) {

    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const page = searchParams.get("page")
    const size = searchParams.get("size")


    return (

        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid item xs={12} >

                    <TodoList></TodoList>

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