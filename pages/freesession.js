import React, { useState } from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import CallToAction from "../src/ui/CallToAction";
import Quote from "../src/commonComponents/Quote";
import SnackBar from "../src/commonComponents/SnackBar";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "100%",
    width: "100%",
  },
  radioText: {
    color: theme.palette.common.red,
  },
  pageContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
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

export default function FreeSession({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = theme.breakpoints.down("xs");
  const matchesSM = theme.breakpoints.down("sm");
  const matchesMD = theme.breakpoints.down("md");

  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [contactMethod, setContactMethod] = useState("");
  const [service, setService] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const textFields = [
    { name: "name", label: "Name", value: name, helper: nameHelper },
    { name: "email", label: "Email", value: email, helper: emailHelper },
    { name: "phone", label: "Phone", value: phone, helper: phoneHelper },
  ];

  const handleContactMethodChange = (event) => {
    setContactMethod(event.target.value);
    console.log(contactMethod);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
    console.log(service);
  };

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
      default:
        break;
    }
  };

  const handleSubmit = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setService("");
    setContactMethod("");
    setDialogOpen(false);
    setSnackbarOpen(true);
  };

  const methods = [
    { name: "email", label: "Email", value: "email" },
    { name: "call", label: "Phone Call", value: "call" },
    { name: "text", label: "Text", value: "text" },
    { name: "whatsapp", label: "Whatsapp", value: "whatsapp" },
  ];

  const services = [
    { name: "reiki", label: "Reiki", value: "reiki" },
    { name: "reflexology", label: "Reflexology", value: "reflexology" },
    { name: "tarot", label: "Tarot Reading", value: "tarot" },
    {
      name: "counselling",
      label: "Spiritual Counselling",
      value: "counselling",
    },
  ];
  return (
    <Grid item>
      <Head>
        <title key="title">Free Session Sign Up | Flow Living</title>
        <meta
          name="description"
          key="description"
          content="Sign up now for a free 30minute Reiki, Reflexology, Tarot Reading or Spiritual Counselling session to get a taste of what Flow Living has to offer."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Reiki, Reflexology, Tarot and Counselling | Free Session Sign Up"
        />
        {/* --- FILL THIS IN AFTER DEPLOYMENT --- */}
        <meta property="og:url" key="og:url" content="" />
        <link rel="canonical" key="canonical" href="" />
      </Head>
      <Grid item container direction="column" className={classes.pageContainer}>
        <Grid container direction="row">
          <Hidden mdDown>
            <Grid item sm={3} container>
              <img
                src="/assets/sage.png"
                alt="white sage burning"
                className={classes.image}
              />
            </Grid>
          </Hidden>
          <Grid item sm container direction="column" alignItems="center">
            <Grid item style={{ marginTop: "2em" }}>
              <Typography align="center" variant="h1">
                Free Session
              </Typography>
            </Grid>
            <Grid item style={{ marginRight: "1em", marginLeft: "1em" }}>
              <Typography align="center" variant="h5" paragraph>
                Submit the form and I will contact you to book in your free
                30min session within 3 working days.
              </Typography>
            </Grid>
            <Grid container direction="column">
              {textFields.map((textField) => (
                <Grid
                  key={textField.name}
                  item
                  style={{
                    marginLeft: "2em",
                    marginRight: "2em",
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
                  marginLeft: "2em",
                  marginRight: "2em",
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
            >
              <Grid
                item
                align={matchesXS ? "center" : undefined}
                style={{
                  marginBottom: "1em",
                  marginLeft: "2em",
                  marginRight: "2em",
                }}
              >
                <Typography variant="h5" align="center">
                  1. Which service would you like to experience?
                </Typography>
              </Grid>
              <Grid item style={{ marginLeft: "1em", marginRight: "1em" }}>
                <FormControl>
                  <RadioGroup
                    aria-label="service"
                    name="service"
                    value={service}
                    onChange={handleServiceChange}
                  >
                    {services.map((service) => (
                      <FormControlLabel
                        key={service.name}
                        value={service.value}
                        control={<Radio />}
                        label={service.label}
                        className={classes.radioText}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "30em", marginTop: "2em" }}
            >
              <Grid
                item
                align={matchesXS ? "center" : undefined}
                style={{
                  marginBottom: "1em",
                  marginLeft: "2em",
                  marginRight: "2em",
                }}
              >
                <Typography variant="h5">
                  2. Preferred method of contact for organising free session
                </Typography>
              </Grid>
              <Grid item style={{ marginLeft: "1em", marginRight: "1em" }}>
                <FormControl>
                  <RadioGroup
                    aria-label="contact-method"
                    name="contact-method"
                    value={contactMethod}
                    onChange={handleContactMethodChange}
                  >
                    {methods.map((method) => (
                      <FormControlLabel
                        key={method.name}
                        value={method.value}
                        control={<Radio />}
                        label={method.label}
                        className={classes.radioText}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disabled={
                  nameHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0 ||
                  contactMethod.length === 0 ||
                  service.length === 0
                }
                classes={{ root: classes.submitButton }}
                onClick={() => setDialogOpen(true)}
              >
                Submit Request
              </Button>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item sm={3} container>
              <img
                src="/assets/elephant.png"
                alt="elephant ornament"
                className={classes.image}
              />
            </Grid>
          </Hidden>
        </Grid>
        <Quote text="I've been having a combination of spiritual counselling and reflexology with Margaret at Flow Living for a year now and it's the best decision I've ever made." />
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
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
              >
                <Grid
                  item
                  align={matchesXS ? "center" : undefined}
                  style={{
                    marginBottom: "1em",
                    marginLeft: "2em",
                    marginRight: "2em",
                  }}
                >
                  <Typography variant="h5" align="center">
                    1. Which service would you like to experience?
                  </Typography>
                </Grid>
                <Grid item style={{ marginLeft: "1em", marginRight: "1em" }}>
                  <FormControl>
                    <RadioGroup
                      aria-label="service"
                      name="service"
                      value={service}
                      onChange={handleServiceChange}
                    >
                      {services.map((service) => (
                        <FormControlLabel
                          key={service.name}
                          value={service.value}
                          control={<Radio />}
                          label={service.label}
                          className={classes.radioText}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                style={{ maxWidth: "30em", marginTop: "2em" }}
              >
                <Grid
                  item
                  align={matchesXS ? "center" : undefined}
                  style={{
                    marginBottom: "1em",
                    marginLeft: "2em",
                    marginRight: "2em",
                  }}
                >
                  <Typography variant="h5">
                    2. Preferred method of contact for organising free session
                  </Typography>
                </Grid>
                <Grid item style={{ marginLeft: "1em", marginRight: "1em" }}>
                  <FormControl>
                    <RadioGroup
                      aria-label="contact-method"
                      name="contact-method"
                      value={contactMethod}
                      onChange={handleContactMethodChange}
                    >
                      {methods.map((method) => (
                        <FormControlLabel
                          key={method.name}
                          value={method.value}
                          control={<Radio />}
                          label={method.label}
                          className={classes.radioText}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item align="center">
                <Button
                  variant="contained"
                  disabled={
                    nameHelper.length !== 0 ||
                    emailHelper.length !== 0 ||
                    phoneHelper.length !== 0 ||
                    contactMethod.length === 0 ||
                    service.length === 0
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
        {snackbarOpen && (
          <SnackBar
            snackbarOpen={snackbarOpen}
            setSnackbarOpen={setSnackbarOpen}
          />
        )}
      </Grid>
    </Grid>
  );
}
