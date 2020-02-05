import React from "react";
import NavBar from "../header";
import { DrawerStyles } from "component/header/sidebar /DrawStyle";
import clsx from "clsx";
import { SidebarContext } from "context/SidebarContext";
import { CssBaseline } from "@material-ui/core";

export default function(props) {
  const SidebarController = React.useContext(SidebarContext);
  const classes = DrawerStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: SidebarController.state
        })}
      >
        <div className={classes.drawerHeader} />
        {props.children}
      </main>
    </div>
  );
}
