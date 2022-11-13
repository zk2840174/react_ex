import React, {useEffect, useState} from 'react';
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {putTodo} from "../../apis/todoApi";

function TodoModify({todo}) {

    console.log("-------------------", todo)

    const [modTodo, setModTodo] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        setModTodo(todo)
    },[todo])

    if(!modTodo) {
        return <></>
    }

    const handleChange = (e) => {
        modTodo[e.target.name] = e.target.value
        setModTodo({...modTodo})
    }

    const clickModify = () => {
        putTodo(modTodo).then(result => {
            navigate(`/todo/list`, {state: {from:'modified'}})
        })
    }

    return (
        <Box sx={{p: 2,gap: 2}}>
            <Paper elevation={3} sx={{p:1}}>
                <Typography variant={'h4'} sx={{p:3}}>Todo Modify </Typography>

                <TextField fullWidth
                           variant="filled"
                           name="id"
                           value = {modTodo.id}
                           label="Writer"
                ></TextField>

                <TextField fullWidth
                           variant="outlined"
                           name="title"
                           value={modTodo.title}
                           label="Title"
                           onChange={event => handleChange(event)}
                ></TextField>

                <TextField fullWidth
                           variant="outlined"
                           name="writer"
                           value = {modTodo.writer}
                           label="Writer"
                           onChange={event => handleChange(event)}
                ></TextField>

                <Box sx={{p:1}} justifyContent={'right'} display={'flex'}>
                    <Button variant={'contained'}><Link to={`/todo/modify/${modTodo.id}`}>DELETE</Link></Button>
                    <Button variant={'contained'} onClick={clickModify}>MODIFY</Button>
                    <Button variant={'contained'}><Link to={`/todo/list`}>List</Link></Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default TodoModify;