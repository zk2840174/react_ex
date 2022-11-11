import React from 'react';
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import useModifyTodo from "../../hooks/useModifyTodo";


function TodoModify({id}) {

    const {todo,handleChange,clickModify, clickDelete} = useModifyTodo(id)


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