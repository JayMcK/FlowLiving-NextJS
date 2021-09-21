import React, { useState, Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  socialMediaIcon: {
    height: "3em",
    width: "3em",
    marginRight: "1em",
    marginLeft: "1em",
  },
  socialMediaIconSmall: {
    height: "3em",
    width: "3em",
    marginRight: "0.5em",
    marginLeft: "0.5em",
  },
  socialMediaIconXS: {
    height: "2em",
    width: "2em",
    marginRight: "0.5em",
    marginLeft: "0.5em",
  },
  socialMediaTitle: {
    color: theme.palette.common.gold,
    textTransform: "uppercase",
    fontSize: "1.5rem",
  },
  footerContainer: {
    backgroundColor: theme.palette.common.red,
    paddingTop: "2em",
    paddingBottom: "2em",
    border: `1px solid ${theme.palette.common.gold}`,
  },
  divider: {
    backgroundColor: theme.palette.common.gold,
    opacity: 0.5,
  },
  newsletterTitle: {
    textTransform: "uppercase",
    color: theme.palette.common.gold,
  },
  textField: {
    backgroundColor: "#fff",
  },
  submitButton: {
    ...theme.typography.learnButton,
    textTransform: "uppercase",
    backgroundColor: theme.palette.common.gold,
    color: theme.palette.common.red,
    fontWeight: "bold",
    borderRadius: 0,
    width: "17em",
    height: "2em",
    marginTop: "0.5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  toTop: {
    ...theme.typography.h2,
    fontSize: "1.5em",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  upArrow: {
    height: "2em",
    width: "2em",
  },
  upArrowButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  footerLink: {
    ...theme.typography.h2,
    fontSize: "1em",
    marginLeft: "1em",
    marginRight: "1em",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  textFieldSmall: {
    backgroundColor: "#fff",
  },
  submitButtonSmall: {
    ...theme.typography.learnButton,
    textTransform: "uppercase",
    backgroundColor: theme.palette.common.gold,
    color: theme.palette.common.red,
    borderRadius: 0,
    width: "10em",
    fontWeight: "bold",
    height: "2.3em",
    marginTop: "0.5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  dialogTitle: {
    color: theme.palette.common.red,
    fontWeight: 800,
  },
  cancelButton: {
    ...theme.typography.h2,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  dialogContainer: {
    borderRadius: 0,
  },
  signUpButton: {
    ...theme.typography.learnButton,
    textTransform: "uppercase",
    backgroundColor: theme.palette.common.gold,
    color: theme.palette.common.red,
    fontWeight: "bold",
    borderRadius: 0,
    border: `1px solid ${theme.palette.common.green}`,
    maxWidth: "20em",
    height: "2em",
    marginTop: "1em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default function Footer({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  const links = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    { name: "Pricing", link: "/pricing", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  const socialMediaIcons = [
    {
      href: "https://www.facebook.com/",
      src: "/assets/facebook.svg",
      alt: "facebook link",
    },
    {
      href: "https://www.instagram.com/",
      src: "/assets/instagram.svg",
      alt: "instagram link",
    },
    {
      href: "https://www.linkedin.com/",
      src: "/assets/linkedin.svg",
      alt: "linkedin link",
    },
    {
      href: "https://www.pinterest.co.uk/",
      src: "/assets/pinterest.svg",
      alt: "pinterest link",
    },
    {
      href: "https://www.tiktok.com/",
      src: "/assets/tiktok.svg",
      alt: "tiktok link",
    },
    {
      href: "https://twitter.com/",
      src: "/assets/twitter.svg",
      alt: "twitter link",
    },
  ];

  const fullFooter = (
    <Grid item>
      <Grid container direction="row" className={classes.footerContainer}>
        <Grid item md={8}>
          {/* ----- SOCIAL MEDIA LINKS BLOCK ----- */}
          <Grid container direction="column">
            <Grid item align="center" style={{ marginBottom: "1em" }}>
              <Typography variant="h2" className={classes.socialMediaTitle}>
                Follow #FlowLiving
              </Typography>
            </Grid>
            <Grid item container direction="row" justifyContent="center">
              {socialMediaIcons.map((icon) => (
                <Grid
                  key={icon.href}
                  item
                  component={"a"}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className={classes.socialMediaIcon}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" classes={{ root: classes.divider }} />
        </Grid>
        <Grid item md>
          {/* ----- NEWSLETTER BLOCK ----- */}
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h5" className={classes.newsletterTitle}>
                Newsletter
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                style={{ color: theme.palette.common.gold }}
              >
                Sign up to our monthly newsletter
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                color="primary"
                id="email"
                value={email}
                onChange={(e) => handleChange(e)}
                classes={{ root: classes.textField }}
                placeholder="Enter your email address..."
                style={{ width: "17em" }}
              />
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  if (email.length !== 0) {
                    setDialogOpen(true);
                  }
                }}
                className={classes.submitButton}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ marginTop: "0.5em" }}
        >
          <Grid item>
            <Button
              onClick={handleScrollToTop}
              disableRipple
              className={classes.toTop}
            >
              Back to Top
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={handleScrollToTop}
              disableRipple
              className={classes.upArrowButton}
            >
              <img
                src="/assets/upArrow.svg"
                alt="up arrow"
                className={classes.upArrow}
              />
            </Button>
          </Grid>
        </Grid>
        <Grid item container direction="column">
          <Grid item>
            <Divider
              style={{
                width: "50em",
                margin: "auto",
                marginBottom: "0.5em",
              }}
              classes={{ root: classes.divider }}
            />
          </Grid>
          <Grid item style={{ marginBottom: "2em" }}>
            <Grid container direction="row" justifyContent="center">
              {links.map((link) => (
                <Grid item key={link.link}>
                  <Button
                    component={Link}
                    href={link.link}
                    onClick={() => {
                      setValue(link.activeIndex);
                      setSelectedIndex(link.selectedIndex);
                    }}
                    disableRipple
                    className={classes.footerLink}
                  >
                    {link.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const smallFooter = (
    <Grid item>
      <Grid
        container
        direction="column"
        className={classes.footerContainer}
        alignItems="center"
      >
        <Grid item>
          <Typography
            variant="h5"
            className={classes.newsletterTitle}
            style={{ fontSize: "1.5rem" }}
          >
            Newsletter
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle2"
            style={{ color: theme.palette.common.gold, marginBottom: "1em" }}
          >
            Sign up to our monthly newsletter
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          style={{ marginBottom: "1em" }}
        >
          <Grid item>
            <TextField
              color="primary"
              id="email"
              value={email}
              onChange={(e) => handleChange(e)}
              classes={{ root: classes.textFieldSmall }}
              placeholder="Enter email address..."
              style={{ width: "15em" }}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                if (email.length !== 0) {
                  setDialogOpen(true);
                }
              }}
              className={classes.submitButtonSmall}
              style={{ marginTop: 0, marginLeft: "2em" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Divider
            style={{
              width: "30em",
              margin: "auto",
              marginBottom: "0.5em",
            }}
            classes={{ root: classes.divider }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h2"
            className={classes.socialMediaTitle}
            style={{ fontSize: "1.25rem", marginBottom: "0.5em" }}
          >
            Follow #FlowLiving
          </Typography>
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          {socialMediaIcons.map((icon) => (
            <Grid
              item
              component={"a"}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              key={icon.href}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className={classes.socialMediaIconSmall}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );

  const xsFooter = (
    <Grid item>
      <Grid
        container
        direction="column"
        className={classes.footerContainer}
        alignItems="center"
      >
        <Grid item>
          <Typography
            variant="h2"
            className={classes.socialMediaTitle}
            style={{ fontSize: "1.25rem", marginBottom: "0.5em" }}
          >
            Follow #FlowLiving
          </Typography>
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          {socialMediaIcons.map((icon) => (
            <Grid
              item
              component={"a"}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              key={icon.href}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className={classes.socialMediaIconXS}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <Divider
            style={{
              width: "20em",
              margin: "auto",
              marginBottom: "0.5em",
              marginTop: "1em",
            }}
            classes={{ root: classes.divider }}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={() => setDialogOpen(true)}
            className={classes.signUpButton}
          >
            Sign up to our Newsletter
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Fragment>
      <Hidden smDown>{fullFooter}</Hidden>
      <Hidden mdUp xsDown>
        {smallFooter}
      </Hidden>
      <Hidden smUp>{xsFooter}</Hidden>
      <Dialog
        elevation={1}
        style={{ zIndex: 1302 }}
        classes={{ paper: classes.dialogContainer }}
        fullScreen={matchesSM ? true : undefined}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogContent>
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item align="center">
                <Typography variant="h4" className={classes.dialogTitle}>
                  Sign Up to Our Monthly Newsletter
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: theme.palette.common.red }}
                >
                  Confirm Details
                </Typography>
              </Grid>
              <Grid item container direction="column" alignItems="center">
                <Grid
                  item
                  style={{
                    marginTop: "1em",
                    width: matchesXS ? "15em" : "20em",
                  }}
                >
                  <TextField
                    label="Name"
                    id="name"
                    value={name}
                    onChange={(e) => handleChange(e)}
                    fullWidth
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: "1em",
                    width: matchesXS ? "15em" : "20em",
                  }}
                >
                  <TextField
                    label="Email"
                    id="email"
                    value={email}
                    onChange={(e) => handleChange(e)}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
                <Button
                  className={classes.submitButton}
                  style={{ width: matchesXS ? "15em" : "20em" }}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disableRipple
                  className={classes.cancelButton}
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
