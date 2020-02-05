import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import AddPatient from "../../patient/AddPatient";
import Linker from "component/common-components/Linker";
import { DrawerStyles } from "./DrawStyle";

const dialogState = { "New Patient": false };
function reducer(state, action) {
  switch (action.type) {
    case "OPEN":
      return { ...state, [`${action.modal}`]: true };
    case "CLOSE":
      return { ...state, [`${action.modal}`]: false };
    default:
      return state;
  }
}

const FORMS = ["New Patient"];
const PAGES = ["Home", "Patients"];

export default ({ handleDrawerClose, open }) => {
  const classes = DrawerStyles();
  const theme = useTheme();

  const [show, dispatch] = React.useReducer(reducer, dialogState);
  function handleClose(event, name) {
    event.stopPropagation();
    dispatch({ type: "CLOSE", modal: [`${name}`] });
  }
  function handleOpen(event, name) {
    event.stopPropagation();
    dispatch({ type: "OPEN", modal: [`${name}`] });
  }

  return (
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
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {PAGES.map((text, index) => (
          <Linker
            route={
              text === "Home"
                ? "/home"
                : text === "Patients"
                ? "/patient"
                : null
            }
            key={index}
          >
            <ListItem button>
              <ListItemIcon>
                {index % 2 === 0 ? <DashboardIcon /> : <GroupIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Linker>
        ))}
      </List>
      <Divider />
      <List>
        {FORMS.map((text, index) => (
          <ListItem
            key={index}
            button
            onClick={event => handleOpen(event, text)}
          >
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
            <AddPatient
              title={text}
              isOpen={show[text]}
              handleClose={event => handleClose(event, text)}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
