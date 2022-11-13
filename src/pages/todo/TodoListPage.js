import React, {useEffect, useState} from 'react';
import SampleLayout from "../../layouts/SampleLayout";
import {Box, Button, Grid, Modal, Typography} from "@mui/material";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {getTodoList} from "../../apis/todoApi";
import TodoList from "../../components/todo/TodoList";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function TodoListPage(props) {

    const [searchParams, setSearchParams] = useSearchParams()
    const [open,setOpen] = useState(false)

    const navigate = useNavigate()

    const page = searchParams.get("page")
    const size = searchParams.get("size")

    const location = useLocation()

    const handleClose = () => {
        console.log('handleClose')
        setOpen(false)
    }
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodoList().then(arr => {
            setTodos(arr)
        })

        if(location.state){
            setOpen(true)
            navigate(location.pathname,{})
        }

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

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        처리 결과
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        정상적으로 처리되었습니다.
                    </Typography>
                </Box>
            </Modal>

        </SampleLayout>

    );
}

export default TodoListPage;