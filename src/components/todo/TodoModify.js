import React, {useEffect, useState} from 'react';
import {deleteTodo, getTodo, putTodo} from "../../apis/todoApi";
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";


const initState = {
    id:0,
    title:'',
    writer:''
}

function TodoModify({id}) {

    const [todo, setTodo] = useState(initState)

    const navigate = useNavigate()

    useEffect(() => {

        getTodo(id).then(result => setTodo(result))

    },[id])

    const handleChange = (e) => {

        todo[e.target.name] = e.target.value

        setTodo({...todo})
    }

    const clickModify = () => {

        putTodo(todo).then(() => navigate(`/todo/read/${todo.id}`) )
    }

    const clickDelete = () => {

        deleteTodo(todo.id).then(() => navigate(`/todo/list`) )

    }


    return (
        <Box sx={{p: 2,gap: 2}}>
            <Paper elevation={3} sx={{p:1}}>
                <Typography variant={'h4'} sx={{p:3}}>Todo Modify</Typography>

                <TextField fullWidth
                           variant="outlined"
                           name="title"
                           value={todo.title}
                           label="Title"
                           onChange={e => handleChange(e)} //상태 변경
                ></TextField>

                <TextField fullWidth
                           variant="outlined"
                           name="writer"
                           value = {todo.writer}
                           label="Writer"
                           onChange={e => handleChange(e)} //상태 변경
                ></TextField>

                <Box sx={{p:1}} justifyContent={'right'} display={'flex'}>
                    <Button variant={'contained'}> <Link to={`/todo/list`}>LIST</Link></Button>
                    <Button variant={'contained'} onClick={clickModify}>MODIFY</Button>
                    <Button variant={'contained'} onClick={clickDelete}>DELETE</Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default TodoModify;