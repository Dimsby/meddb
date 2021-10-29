import React from "react";
import {Modal, Box} from "@mui/material";
//import {makeStyles} from "@mui/styles";

export default function ModalCommon(props) {

    const modalStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    }
    const modalInnerStyle = {
        width: props.width || 400,
        maxHeight: 'calc(100% - 64px)',
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 5,
        padding: 5,
    }

    return (
        <React.Fragment>
            <Modal
                sx={modalStyle}
                open={props.open || false}
                onClose={props.modalCloseHandler}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Box sx={modalInnerStyle}>
                    {props.children}
                </Box>
            </Modal>
        </React.Fragment>
    )

}