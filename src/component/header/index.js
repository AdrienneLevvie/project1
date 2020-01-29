import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import { withRouter } from 'react-router-dom'
import auth from 'controllers/login/auth'
import { DrawerComponent } from './sidebar /Sidebar';
import { SidebarContext } from 'context/SidebarContext';

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


export default withRouter((props) => {
    const classes = useStyle()
    const SidebarController = React.useContext(SidebarContext)
    const { enqueueSnackbar } = useSnackbar();
    const [state, dispatch] = React.useReducer(navBarReducer, {anchorEl:null})
    const open = Boolean(state.anchorEl);

    const handleLogout = async() => {
        const result = await auth.logout()
        enqueueSnackbar(result.msg, {...result, autoHideDuration: 3000})
        props.history.push('/')
    }

    const drawerOpen = SidebarController.state

    const handleDrawerOpen = () => {
        SidebarController.option({type: 'OPEN'})
    };

    const handleDrawerClose = () => {
        SidebarController.option({type: 'CLOSE'})
    };
    

    return (
    <div style={{display: 'flex'}}>
        <AppBar position="static" className={classes.root}>
            <Toolbar variant="dense">
                <IconButton edge="start" aria-label="menu" onClick={handleDrawerOpen}>
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" color="inherit">
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
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        <DrawerComponent handleDrawerClose={handleDrawerClose} open={drawerOpen} />
    </div>
    )
})