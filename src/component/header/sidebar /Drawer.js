import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import AddPatient from './AddPatient';
import {Link} from 'react-router-dom'
import Linker from 'component/common-components/Linker';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      position: "absolute"
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

const dialogState = {'New Patient': false}
function reducer(state, action){
    switch(action.type){
      case 'OPEN':
        return {...state, [`${action.modal}`]: true}
      case 'CLOSE':
        return {...state,[`${action.modal}`]: false}
      default:
        return state
    }
}

export default ({handleDrawerClose, open}) => {
    const classes = useStyles();   
    const theme = useTheme();
 
    const [show, dispatch] = React.useReducer(reducer, dialogState)
    function handleClose(event, name){
      event.stopPropagation()
      dispatch({type: 'CLOSE', modal: [`${name}`]})
    }
    function handleOpen(event, name){
      event.stopPropagation()
      dispatch({type: 'OPEN', modal:[`${name}`]})
    }

    return (
      <React.Fragment>
            <CssBaseline />
            <Drawer 
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
              <div className={classes.drawerHeader}>
                <Typography variant="h5">Hello, Doc!</Typography>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
                <Divider />
                <List>
                  {['Home','Patients'].map((text, index) => (
                    <Linker route={text === 'Home'?'/home': text === 'Patients'? '/patient':null}>
                    <ListItem button key={index}>
                      <ListItemIcon>{index % 2 === 0 ? <DashboardIcon /> : <GroupIcon />}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                    </Linker>
                  ))}
                </List>
                <Divider />
                <List>
                  {['New Patient'].map((text, index) => (
                    <ListItem key={index} button onClick={(event) => handleOpen(event, text)}>
                      <ListItemIcon>
                        <AddCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                   
                      <AddPatient title={text} isOpen={show[text]} handleClose={(event) => handleClose(event, text)} />
                    </ListItem>
                  ))}
                </List>
            </Drawer>
      </React.Fragment>
    )
}
