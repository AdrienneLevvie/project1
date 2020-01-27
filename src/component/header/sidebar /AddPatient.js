import React from 'react'
import Modal from '../../common-components/Modal'
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { TextField, Input } from '@material-ui/core';
//import DialogContentText from '@material-ui/core/DialogContentText';


const fields = ["Patient's Name", ["House No.", "Street", "City"], "Age"]

const InputField = (props) => (
    fields.map(name => {
        
        return typeof(name) === 'string'? (
        <TextField 
            key={name}
            autoFocus
            margin="dense"
            label={name}
            type="text"
            fullWidth
            />
        ):(
            name.map(groupedField => (
                <div key={groupedField} style={{display: 'inline'}}>
                <TextField 
                    autoFocus
                    margin="dense"
                    label={groupedField}
                    type="text"
                    fullWidth
                />
                </div>
            ))
        )
    })
)

export default (props) => {
    const {isOpen, title, handleClose} = props
    return (
        <Modal title={title} open={isOpen} handleClose={handleClose}>
            <DialogContent>
                <InputField />
            </DialogContent>
        </Modal>
    )
}

