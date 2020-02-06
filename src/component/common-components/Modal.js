import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
      backgroundColor: '#3257a8',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));

export default (props) => {
    const {open, handleClose, title} = props
    const classes = useStyles()
    return (
        <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="form-dialog-title" TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                {title}
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                save
                </Button>
            </Toolbar>
            </AppBar>
            {props.children}
        </Dialog>
    )
}


