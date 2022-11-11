import React from 'react';
import {Box, Button, Paper, TextField, Typography} from "@mui/material";

import {Link} from "react-router-dom";
import useGetTodo from "../../hooks/useGetTodo";


function TodoRead({id}) {

    const [todo] = useGetTodo(id)


    return (
        <Box sx={{p: 2,gap: 2}}>
            <Paper elevation={3} sx={{p:1}}>
                <Typography variant={'h4'} sx={{p:3}}>Todo Read </Typography>

                <TextField fullWidth
                           variant="outlined"
                           name="title"
                           value={todo.title}
                           label="Title"
                ></TextField>

                <TextField fullWidth
                           variant="outlined"
                           name="writer"
                           value = {todo.writer}
                           label="Writer"
                ></TextField>

                <Box sx={{p:1}} justifyContent={'right'} display={'flex'}>
                    <Button variant={'contained'}><Link to={`/todo/modify/${id}`}>MODIFY</Link></Button>
                    <Button variant={'contained'}>RESET</Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default TodoRead;