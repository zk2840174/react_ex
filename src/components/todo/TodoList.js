import React from 'react';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";


function TodoList({todos}) {


    if(!todos || todos.length == 0){
        return <></>
    }

    const list = todos.map( todo => (
        <TableRow
            key={todo.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="left"> {todo.id}</TableCell>
            <TableCell component="th" scope="row"><Link to={`/todo/read/${todo.id}`}>{todo.title}</Link></TableCell>
            <TableCell align="right">{todo.writer}</TableCell>
        </TableRow>
    ))

    return (
        <Box sx={{p: 2,gap: 2}}>
            <Paper elevation={3} sx={{p:1}}>
                <Typography variant={'h4'} sx={{p:3}}>Todo List </Typography>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Writer</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default TodoList;