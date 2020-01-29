import React from 'react'
import Modal from '../../common-components/Modal'
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { TextField, Container, makeStyles } from '@material-ui/core';
//import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from 'prop-types'


const useStyle = makeStyles( theme => ({
    InputField: {
        margin: theme.spacing(1)
    }
}))
const fields = [
    ["Patient's Name"], 
    ["Sex", "Age", "Birthday"],
    ["House No.", "Street", "City"],
    ["Mother's Name", "Mother's Occupation"],
    ["Father's Name", "Father's Occupation"],
]
const InputField = (props) => {
    const classes = useStyle()
    return (
        <div>
           {
               props.fields.map( group => (
                   <div key={group} style={{display: 'flex'}}>
                       {group.map( name => (
                            <TextField
                            key={name}
                            className={classes.InputField} 
                            autoFocus
                            margin="dense"
                            label={name}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type={name==='Birthday'? 'date':'text'}
                            fullWidth
                            variant="outlined"
                        />
                       ))}
                   </div>
               ))
           }
        </div>
    )   
}
InputField.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default (props) => {
    const {isOpen, title, handleClose} = props
    return (
        <Modal title={title} open={isOpen} handleClose={handleClose}>
            <DialogContent>
                <Container>
                    <h1>Image Here</h1>
                </Container>
                <InputField fields={fields}/>
            </DialogContent>
        </Modal>
    )
}

