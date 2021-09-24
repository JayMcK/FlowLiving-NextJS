import React, { useState, Fragment, useEffect, useMemo } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";

import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import HomeIcon from "@material-ui/icons/Home";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import MenuIcon from "@material-ui/icons/Menu";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    // ...theme.mixins.toolbar,
    minHeight: "64px",
    [theme.breakpoints.down("xs")]: {
      minHeight: "50px",
    },
  },
  appbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.25em",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
    },
  },
  appBar: {
    backgroundColor: "#fff",
    zIndex: theme.zIndex.modal + 1,
    borderBottom: `2px solid ${theme.palette.grey[700]}`,
  },
  sessionButton: {
    ...theme.typography.sessionButton,
    borderRadius: 50,
    paddingLeft: "1em",
    paddingRight: "1em",
    marginRight: "1em",
    height: "45px",
    color: theme.palette.common.gold,
  },
  headerLogo: {
    height: "6em",
    [theme.breakpoints.down("xs")]: {
      height: "4em",
    },
  },
  headerLogoSmall: {
    height: "5em",
  },
  tab: {
    ...theme.typography.h5,
    textTransform: "none",
    minWidth: 10,
    marginLeft: "5px",
    marginRight: "5px",
  },
  tabContainer: {
    margin: "auto",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuContainer: {
    borderRadius: 0,
  },
  menuItemText: {
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      width: "40px",
    },
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "auto",
  },
  listItemIcon: {
    minWidth: "40px",
  },
  drawerItem: {
    ...theme.typography.h5,
    fontSize: "1.25rem",
    color: "#fff",
    opacity: 0.7,
  },
  sessionText: {
    ...theme.typography.h5,
    fontSize: "1.25rem",
    color: theme.palette.grey[600],
  },
  drawer: {
    backgroundColor: theme.palette.common.red,
  },
  freeSessionButton: {
    backgroundColor: theme.palette.common.green,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },

  text: {
    marginBottom: 0,
  },
  sessionItemSelected: {
    backgroundColor: "#fff",
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [previousURL, setPreviousURL] = useState("");

  let routes;
  let menuOptions;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  useEffect(() => {
    if (previousURL !== window.location.pathname) {
      setPreviousURL(window.location.pathname);
    }
    checkPath();
  }, [value, menuOptions, selectedIndex, routes]);

  function checkPath() {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          setValue(route.activeIndex);
          setSelectedIndex(route.selectedIndex);
          break;
        case "/freesession":
          setValue(false);
          break;
        default:
          break;
      }
    });
  }

  menuOptions = useMemo(
    () => [
      {
        name: "All Services",
        activeIndex: 1,
        selectedIndex: 0,
        link: "/services",
        icon: <AllInclusiveIcon color="secondary" fontSize="small" />,
      },
      {
        name: "Reiki Healing",
        activeIndex: 1,
        selectedIndex: 1,
        link: "/reiki",
        icon: <Brightness5Icon color="secondary" fontSize="small" />,
      },
      {
        name: "Reflexology",
        activeIndex: 1,
        selectedIndex: 2,
        link: "/reflexology",
        icon: <TouchAppIcon color="secondary" fontSize="small" />,
      },
      {
        name: "Tarot Reading",
        activeIndex: 1,
        selectedIndex: 3,
        link: "/tarot",
        icon: <ImageSearchIcon color="secondary" fontSize="small" />,
      },
      {
        name: "Spiritual Counselling",
        activeIndex: 1,
        selectedIndex: 4,
        link: "/counselling",
        icon: <QuestionAnswerIcon color="secondary" fontSize="small" />,
      },
    ],
    []
  );

  routes = useMemo(
    () => [
      {
        name: "Home",
        activeIndex: 0,
        link: "/",
        icon: <HomeIcon color="secondary" fontSize="medium" />,
      },
      {
        name: "All Services",
        activeIndex: 1,
        selectedIndex: 0,
        link: "/services",
        icon: <AllInclusiveIcon color="secondary" fontSize="medium" />,
        ariaOwns: anchorEl ? "menu" : undefined,
        ariaPopup: anchorEl ? true : undefined,
        mouseOver: (event) => handleClick(event),
      },
      {
        name: "Pricing",
        activeIndex: 2,
        link: "/pricing",
        icon: <LocalOfferIcon color="secondary" fontSize="medium" />,
      },
      {
        name: "About Us",
        activeIndex: 3,
        link: "/about",
        icon: <PersonIcon color="secondary" fontSize="medium" />,
      },
      {
        name: "Contact Us",
        activeIndex: 4,
        link: "/contact",
        icon: <PhoneIcon color="secondary" fontSize="medium" />,
      },
    ],
    [anchorEl]
  );

  const tabs = (
    <Fragment>
      {/* ----- TABS BLOCK FOR LARGER SCREENS ----- */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="menu tabs"
        className={classes.tabContainer}
      >
        {routes.map((route) => (
          <Tab
            key={`${route}${route.activeIndex}`}
            disableRipple
            label={route.name}
            component={Link}
            href={route.link}
            className={classes.tab}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.hasPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        href="/freesession"
        className={classes.sessionButton}
        onClick={() => setValue(false)}
      >
        Free Session
      </Button>
      <Menu
        disableScrollLock={true}
        elevation={0}
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menuContainer }}
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, index) => (
          <div key={`${option}${index}`}>
            <MenuItem
              onClick={(event) => {
                setValue(option.activeIndex);
                handleMenuItemClick(event, index);
              }}
              component={Link}
              href={option.link}
              selected={index === selectedIndex && value === 1}
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              <Typography className={classes.menuItemText} variant="h5">
                {option.name}
              </Typography>
            </MenuItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </Menu>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor="right"
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.appbarMargin} />
        <List component="nav" aria-label="drawer nav">
          {routes.map((route, index) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              button
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              component={Link}
              href={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              divider
            >
              <ListItemIcon classes={{ root: classes.listItemIcon }}>
                {route.icon}
              </ListItemIcon>
              <ListItemText
                disableTypography
                className={classes.drawerItem}
                classes={{ root: classes.text }}
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(false);
            }}
            component={Link}
            href="/freesession"
            className={classes.freeSessionButton}
            divider
          >
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <InsertEmoticonIcon color="primary" fontSize="medium" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.drawerItem}
              style={{ color: theme.palette.grey[700] }}
              classes={{ primary: classes.sessionText, root: classes.text }}
            >
              Free Session
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon
          color="primary"
          fontSize="large"
          className={classes.drawerIcon}
        />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <div className={classes.root}>
          <AppBar elevation={0} position="fixed" className={classes.appBar}>
            <Toolbar disableGutters>
              <Button
                component={Link}
                href="/"
                disableRipple
                className={classes.logoContainer}
                onClick={() => setValue(0)}
              >
                <Hidden xsDown>
                  <img
                    src="/assets/headerLogo.svg"
                    className={classes.headerLogo}
                    alt="company logo and name"
                  />
                </Hidden>
                <Hidden smUp>
                  <img
                    src="/assets/headerLogoSmall.svg"
                    className={classes.headerLogoSmall}
                    alt="company logo and name"
                  />
                </Hidden>
              </Button>
              <Hidden mdDown>{tabs}</Hidden>
              <Hidden lgUp>{drawer}</Hidden>
            </Toolbar>
          </AppBar>
        </div>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}
