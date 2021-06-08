import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  // Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";
import clsx from "clsx";
import MenuItem from "../MenuItem/MenuItem";
import routes from "../routes";
import { useStyles } from "../MenuItem/styles";
import SignOutIcon from "../assets/SignOutIcon.svg";


const Navigation = () => {
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const toggleNavigation = () => {
    setOpen(!open);
  };

  const closeNavigation = () => {
    if (matches) {
      setOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    localStorage.setItem('isLogin', 'false');
    history.push('/login');
    window.location.reload();
  };

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={toggleNavigation}
            edge="start"
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography color="inherit" component="h1" variant="h6">
            Quality
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: clsx(
            classes.navigationDrawer,
            !open && classes.navigationDrawerCollapse
          ),
        }}
        variant={matches ? "temporary" : "permanent"}
        open={open}
      >
        <div
          className={clsx(
            classes.navigationToolbar,
            !open && classes.navigationToolbarCollapse
          )}
        >
          <IconButton onClick={toggleNavigation}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <div className={classes.navigationLogoContainer}>
          <img
            className={classes.navigationLogo}
            src={open ? Logo1 : Logo2}
            alt="CarSales Logo"
          />
        </div>
        <List className={classes.navigationList}>
          {routes.map((route, index) => {
            return (
              <React.Fragment key={index}>
                {/* {route.path === "/sign-out" && (
                  <div className={classes.navigationSpacer}>
                    
                  </div>
                )} */}
                <MenuItem
                  label={route.label}
                  icon={route.icon}
                  activeIcon={route.activeIcon}
                  path={route.path}
                  onClick={closeNavigation}
                />
              </React.Fragment>
            );
          })}
          <ListItem
              button
              className={clsx(classes.menuItem)}
              onClick={handleLogout}
            >
            <ListItemIcon>
              <Icon>
                <img
                  className={classes.menuItemIcon}
                  src={SignOutIcon}
                  alt="signout"
                />
              </Icon>
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{ variant: "body2" }}
            />
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
