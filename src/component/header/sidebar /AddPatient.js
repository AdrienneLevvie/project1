import React from 'react'
import Modal from '../../common-components/Modal'
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { TextField } from '@material-ui/core';
//import DialogContentText from '@material-ui/core/DialogContentText';


export default (props) => {
    const {isOpen, title, handleClose} = props
    return (
        <Modal title={title} open={isOpen} handleClose={handleClose}>
            <DialogContent>
                <TextField 
                    autoFocus
                    margin="dense"
                    label="Patient's Name"
                    type="text"
                    fullWidth
                />
            </DialogContent>
        </Modal>
    )
}

