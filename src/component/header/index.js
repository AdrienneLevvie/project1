import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(themee => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'rgba(27, 118, 210, 1)'
    },
    title: {
        flexGrow: 1
    }
}))




function navBarReducer(state, {action, anchor}){
    switch(action){
        case 'handleMenu':
            return {anchorEl: anchor}
        case 'handleClose':
            return {anchorEl: null}
        default:
            return state
    }
}


export default ({msg, user}) => {
    const classes = useStyle()
    const [state, dispatch] = React.useReducer(navBarReducer, {anchorEl:null})
    const open = Boolean(state.anchorEl);

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar variant="dense">
                <IconButton edge="start" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" color="inherit">
                    {msg}
                </Typography>
                <IconButton 
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={(e)=>(dispatch({action: 'handleMenu', anchor: e.currentTarget}))}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <Menu
                    anchorEl={state.anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={()=>dispatch({action:'handleClose'})}
                >
                    <MenuItem>View Profile</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}