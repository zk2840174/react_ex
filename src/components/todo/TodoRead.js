import React from 'react';
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import CustomModal from "../util/CustomModal";

function TodoRead({todo}) {

    if(!todo) {
        return <></>
    }

    return (
        <Box sx={{p: 2,gap: 2}}>
            <Paper elevation={3} sx={{p:1}}>
                <Typography variant={'h4'} sx={{p:3}}>Todo Read </Typography>

                <TextField fullWidth
                           variant="filled"
                           name="id"
                           value = {todo.id}
                           label="Writer"
                ></TextField>

                <TextField fullWidth
                           variant="filled"
                           name="title"
                           value={todo.title}
                           label="Title"
                ></TextField>

                <TextField fullWidth
                           variant="filled"
                           name="writer"
                           value = {todo.writer}
                           label="Writer"
                ></TextField>

                <Box sx={{p:1}} justifyContent={'right'} display={'flex'}>
                    <Button variant={'contained'}><Link to={`/todo/modify/${todo.id}`}>MODIFY</Link></Button>
                    <Button variant={'contained'}><Link to={`/todo/list`}>List</Link></Button>
                </Box>
            </Paper>

            <CustomModal></CustomModal>
        </Box>
    );
}

export default TodoRead;