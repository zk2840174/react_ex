import React, {useState} from 'react';
import {Box, Modal, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";


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


function CustomModal(props) {

    const location = useLocation()
    const navigate = useNavigate()

    const [open,setOpen] = useState(location.state != null)

    const handleClose = () => {
        console.log('handleClose')
        setOpen(false)
        navigate(location.pathname,{})
    }

    return (
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
    );
}

export default CustomModal;