import React from "react";
import {Modal} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export default function ModalCommon(props) {
    const useStyles = makeStyles((theme) => ({
        modalWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        },
        modal: {
            width: props.width || 400,
            maxHeight: 'calc(100% - 64px)',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3)
        }
    }));
    const classes = useStyles();

    return (
        <React.Fragment>
            <Modal
                className={classes.modalWrapper}
                open={props.open || false}
                onClose={props.modelCloseHandler}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modal}>
                    {props.children}
                </div>
            </Modal>
        </React.Fragment>
    )

}