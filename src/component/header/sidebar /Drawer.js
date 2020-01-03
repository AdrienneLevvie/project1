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

const dialogState = {'New Record': false, 'New Add': false}
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

function componentReducer(state, action){
  switch(action.type){
    case 'New Record':
      return <AddPatient title={action.title} isOpen={action.isOpen} handleClose={action.handleClose}/>
    default:
      return <AddPatient title={action.title} isOpen={action.isOpen} handleClose={action.handleClose}/>
  }
}



export default ({handleDrawerClose, open}) => {
    const classes = useStyles();   
    const theme = useTheme();
 
    const [show, dispatch] = React.useReducer(reducer, dialogState)

    function handleClose(name){
      dispatch({type: 'CLOSE', modal: [`${name}`]})
    }
    function handleOpen(name){
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
                    <ListItem button key={index}>
                      <ListItemIcon>{index % 2 === 0 ? <DashboardIcon /> : <GroupIcon />}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <List>
                  {['New Record', 'New Add'].map((text, index) => (
                    <React.Fragment key={index}>
                    <ListItem button  onClick={() => handleOpen(text)}>
                      <ListItemIcon>
                        <AddCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                    {
                      <PrototypeComponent 
                        
                      />
                    }  
                    </React.Fragment>
                  ))}
                </List>
            </Drawer>
      </React.Fragment>
    )
}

function PrototypeComponent(props){
  const [component, pickComponent] = React.useReducer(componentReducer, {})
  const thisModal = (modal) => {
    return pickComponent({type:'NEW_RECORD',title: [`${modal.title}`], isOpen: [`${modal.bool}`], handleClose: [`${modal.callback}`] })
  }
  return (
    <div>

    </div>
  )
}