
import React from 'react'
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core'
import { amber, green, red, blue } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx'
//icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import { makeStyles } from '@material-ui/styles'

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
}

const useStyles = makeStyles(theme => ({
    success: {
        backgroundColor: green[600]
    },
    error: {
        backgroundColor: red[600],
    },
    info: {
        backgroundColor: blue[600],
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: '10px'
    },
    message: {
        display: 'flex',
        alignItems: 'center',

    }
}))

function Notification(props){
    const classes = useStyles();
    const { className, message, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            message={
                <span className={classes.message}>
                    <Icon className={clsx(classes.icon,classes.iconVariant)}></Icon>
                    <p>{message}</p>
                </span>
            }
            action={[
                <IconButton key="close">
                    <CloseIcon className={classes.icon}>X</CloseIcon>
                </IconButton>
            ]}
            {...other}
        >
        </SnackbarContent>
    )
}

function NotifyComponent({open, variant, message}){
  return(
      <Snackbar
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
        autoHideDuration={6000}
        open={open}
      >
          <Notification variant={variant} message={message}  />
      </Snackbar>
  )
}

export default NotifyComponent