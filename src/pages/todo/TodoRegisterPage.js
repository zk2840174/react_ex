import React from 'react';
import SampleLayout from "../../layouts/SampleLayout";
import {Box, Button, Card, Grid, Paper, TextField, Typography} from "@mui/material";

function TodoRegisterPage(props) {
    return (
        <SampleLayout>
            <Grid container sx={{pt:8}}>
                <Grid xs={12}>
                    <Typography variant={'h4'}>Todo Register Page</Typography>
                    <Box sx={{p: 2,gap: 2}}>
                        <Paper elevation={3} sx={{p:1}}>
                            <TextField fullWidth
                                       variant="outlined"
                                       name="title"
                                       label="Title"></TextField>
                            <TextField fullWidth
                                       variant="outlined"
                                       name="writer"
                                       label="Writer"></TextField>
                            <Box sx={{p:1}} justifyContent={'right'} display={'flex'}>
                                <Button variant={'contained'}>REGISTER</Button>
                            </Box>
                        </Paper>
                    </Box>

                </Grid>
            </Grid>
        </SampleLayout>
    );
}

export default TodoRegisterPage;