import React, { useState } from "react";
import Head from "next/head";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import CallToAction from "../src/ui/CallToAction";
import Quote from "../src/commonComponents/Quote";
import SnackBar from "../src/commonComponents/SnackBar";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
  background: {
    height: "100%",
    width: "100%",
  },
  infoIcon: {
    width: "1em",
  },
  aTag: {
    textDecoration: "none",
    color: theme.palette.common.red,
  },
  submitButton: {
    ...theme.typography.sessionButton,
    backgroundColor: theme.palette.common.red,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    marginTop: "2em",
    width: 200,
    height: 60,
    border: `1px solid ${theme.palette.common.gold}`,
    boxShadow: "none",
    marginBottom: "2em",
  },
  cancelButton: {
    ...theme.typography.h2,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: theme.palette.common.gold,
    marginBottom: "2em",
  },
}));

export default function Contact({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const textFields = [
    { name: "name", label: "Name", value: name, helper: nameHelper },
    { name: "email", label: "Email", value: email, helper: emailHelper },
    { name: "phone", label: "Phone", value: phone, helper: phoneHelper },
  ];

  const handleChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        valid = /(.*[a-z]){3}/i.test(event.target.value);
        if (!valid) {
          setNameHelper("Invalid Name");
        } else {
          setNameHelper("");
        }
        break;
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\d{11}$/.test(event.target.value);
        if (!valid) {
          setPhoneHelper("Invalid Phone Number");
        } else {
          setPhoneHelper("");
        }
        break;
      case "message":
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setDialogOpen(false);
    setSnackbarOpen(true);
  };

  return (
    <Grid item>
      <Head>
        <title key="title">Contact Us | Flow Living</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through deciding which of our services to choose. Send us a message with your questions/inquiries to get started!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Reiki, Reflexology, Tarot and Counselling | Contact Us"
        />
        {/* --- FILL THIS IN AFTER DEPLOYMENT --- */}
        <meta property="og:url" key="og:url" content="" />
        <link rel="canonical" key="canonical" href="" />
      </Head>
      <Grid item container direction="column" className={classes.pageContainer}>
        <Grid container direction="row">
          <Grid item container direction="column" lg={4}>
            <Grid
              item
              style={{
                marginTop: "2em",
                marginBottom: "1em",
              }}
              align="center"
            >
              <Typography variant="h1">Contact Us</Typography>
              <Typography variant="h2">Let's talk!</Typography>
            </Grid>
            <Grid item align="center">
              <Typography paragraph>
                <img
                  src="/assets/telephone.svg"
                  alt="telephone"
                  className={classes.infoIcon}
                />{" "}
                <a href="tel:07645837192" className={classes.aTag}>
                  +44 (0) 07645 837 192
                </a>
              </Typography>
            </Grid>
            <Grid item align="center" style={{ marginBottom: "1em" }}>
              <Typography>
                <img
                  src="/assets/envelope.svg"
                  alt="envelope"
                  className={classes.infoIcon}
                />{" "}
                <a
                  href="mailto:contact@flowliving.com"
                  className={classes.aTag}
                >
                  contact@flowliving.com
                </a>
              </Typography>
            </Grid>
            <Grid container direction="column">
              {textFields.map((textField) => (
                <Grid
                  item
                  key={textField.name}
                  style={{
                    marginRight: "2em",
                    marginLeft: "2em",
                    marginBottom: "1em",
                  }}
                >
                  <TextField
                    key={textField.name}
                    id={textField.name}
                    label={textField.label}
                    value={textField.value}
                    onChange={handleChange}
                    fullWidth
                    error={textField.helper.length !== 0}
                    helperText={textField.helper}
                    color="secondary"
                    size="small"
                  />
                </Grid>
              ))}
            </Grid>
            <Grid
              item
              style={{
                marginRight: "2em",
                marginLeft: "2em",
                marginBottom: "1em",
              }}
            >
              <TextField
                id="message"
                label="Tell us more!"
                multiline
                rows={6}
                value={message}
                onChange={handleChange}
                placeholder="Tell us a little about your query!"
                fullWidth
              />
            </Grid>
            <Grid item align="center">
              <Button
                variant="contained"
                disabled={
                  nameHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0 ||
                  message.length === 0
                }
                classes={{ root: classes.submitButton }}
                onClick={() => setDialogOpen(true)}
              >
                Submit Request
              </Button>
            </Grid>
          </Grid>
          <Hidden mdDown>
            {/* --- Hidden on Smaller Screens --- */}
            <Grid item container lg={8}>
              <img
                src="/assets/contactBackground.png"
                alt="crystals"
                className={classes.background}
              />
            </Grid>
          </Hidden>
        </Grid>
        <Quote text="I'd never had a Tarot Reading before but over the past few yeats, my interest in Astrology and spirituality in general has increased. So when I came across Flow Living, I thought I'd give it a try. And I'm so glad I did!" />
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
        {snackbarOpen && (
          <SnackBar
            snackbarOpen={snackbarOpen}
            setSnackbarOpen={setSnackbarOpen}
          />
        )}
        <Dialog
          fullWidth
          fullScreen
          style={{ zIndex: 1302 }}
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >
          <DialogContent>
            <Grid container direction="column">
              <Grid item align="center">
                <Typography variant="h1">Confirm Message</Typography>
              </Grid>
              <Grid container direction="column">
                {textFields.map((textField) => (
                  <Grid
                    key={textField.name}
                    item
                    style={{
                      marginLeft: matchesXS ? "1em" : "2em",
                      marginRight: matchesXS ? "1em" : "2em",
                    }}
                  >
                    <TextField
                      key={textField.name}
                      id={textField.name}
                      label={textField.label}
                      value={textField.value}
                      onChange={handleChange}
                      style={{ marginBottom: "1em" }}
                      error={textField.helper.length !== 0}
                      helperText={textField.helper}
                      color="secondary"
                      size="small"
                      classes={{ root: classes.textField }}
                      fullWidth
                    />
                  </Grid>
                ))}
                <Grid
                  item
                  style={{
                    marginLeft: matchesXS ? "1em" : "2em",
                    marginRight: matchesXS ? "1em" : "2em",
                  }}
                >
                  <TextField
                    id="message"
                    label="Tell us more!"
                    multiline
                    fullWidth
                    rows={6}
                    value={message}
                    onChange={handleChange}
                    placeholder="Tell us a little about interest in Flow Living and detail any questions/queries/requests you may have!"
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                style={{
                  maxWidth: "30em",
                  marginTop: "2em",
                }}
              ></Grid>
              <Grid
                item
                container
                direction="column"
                style={{ maxWidth: "30em", marginTop: "2em" }}
              ></Grid>
              <Grid item align="center">
                <Button
                  variant="contained"
                  disabled={
                    nameHelper.length !== 0 ||
                    emailHelper.length !== 0 ||
                    phoneHelper.length !== 0 ||
                    message.length === 0
                  }
                  classes={{ root: classes.submitButton }}
                  onClick={() => {
                    setDialogOpen(true);
                    handleSubmit();
                  }}
                  style={{ marginBottom: 0 }}
                >
                  Submit Request
                </Button>
              </Grid>
              <Grid item align="center">
                <Button
                  className={classes.cancelButton}
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
}
