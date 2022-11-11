import React from 'react';
import {Box, Button, Paper, TextField, Typography} from "@mui/material";

import useRegisterTodo from "../../hooks/useRegisterTodo";




function TodoRegister() {

    const  {todo,clickRegister,handleChange,handleReset} = useRegisterTodo()

    return (
        <Box sx={{p: 2,gap: 2}}>
            <Paper elevation={3} sx={{p:1}}>
                <Typography variant={'h4'} sx={{p:3}}>Todo Register Page</Typography>

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
                    <Button variant={'contained'} onClick={clickRegister}>REGISTER</Button>
                    <Button variant={'contained'} onClick={handleReset}>RESET</Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default TodoRegister;