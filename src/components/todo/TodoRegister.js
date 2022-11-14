import React, {useState} from 'react';
import {Box, Button, Paper, TextField, Typography} from "@mui/material";
import {postTodo} from "../../apis/todoApi";
import {useNavigate} from "react-router-dom";


const initState = {
    title:'',
    writer: ''
}

function TodoRegister(props) {

    const [todo, setTodo] = useState({...initState}) //상태 추가

    const navigate = useNavigate()

    const handleChange = (e) => {
        todo[e.target.name] = e.target.value
        console.log("todo: ", todo)
        setTodo({...todo})
    }

    const handleReset = () => {
        setTodo({...initState})
    }

    const clickRegister = () => {
        postTodo(todo).then(result => {
            console.log("SEND POST RESULT " , result)
            navigate("/todo/list", {state: {from:'registed'}})
        })
    }

    return (
        <Box sx={{p: 2,gap: 2}}>
            <Paper elevation={3} sx={{p:1}}>
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
            </Paper>
        </Box>
    );
}

export default TodoRegister;
