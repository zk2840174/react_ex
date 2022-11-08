import React from 'react';
import SampleLayout from "../../layouts/SampleLayout";
import {Button, Grid, Typography} from "@mui/material";
import {useNavigate, useSearchParams} from "react-router-dom";

function TodoListPage(props) {

    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const page = searchParams.get("page")
    const size = searchParams.get("size")


    return (
        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid xs={12}>
                    <Typography variant={'h4'}>Todo List Page</Typography>
                    <Typography variant={'h5'}>Page {page}</Typography>
                    <Typography variant={'h5'}>Size {size}</Typography>

                    <Button variant={"outlined"} onClick={() => {

                        setSearchParams({
                            page: 112,
                            size: 50,
                            keyword: '한글'
                        })

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