import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  callBackground: {
    backgroundImage: `url("/assets/callBackground.png")`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      backgroundAttachment: "fixed",
    },
  },
  callTitle: {
    color: "#fff",
  },
  learnButton: {
    ...theme.typography.learnButton,
    color: theme.palette.common.green,
    border: `2px solid ${theme.palette.common.green}`,
  },
  sessionButton: {
    ...theme.typography.sessionButton,
    backgroundColor: theme.palette.common.green,
    fontSize: "1.5rem",
    borderRadius: 50,
    paddingLeft: "1em",
    paddingRight: "1em",
    marginRight: "1em",
    height: 60,
    width: 250,
    color: theme.palette.common.red,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: "#fff",
    },
  },
}));

export default function CallToAction({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const fullPage = (
    <Grid
      container
      direction="row"
      className={classes.callBackground}
      style={{ height: "50em" }}
      alignItems="center"
    >
      <Grid item md container direction="column" style={{ marginLeft: "5em" }}>
        <Grid item align="left">
          <Typography variant="h2" className={classes.callTitle}>
            Reiki, Reflexology, Tarot Reading {matchesMD ? null : <br />} and
            Spiritual Counselling
          </Typography>
        </Grid>
        <Grid item align="left">
          <Button
            variant="contained"
            color="primary"
            className={classes.learnButton}
            component={Link}
            href="/services"
            onClick={() => {
              setValue(0);
              setSelectedIndex(0);
            }}
          >
            Learn More
            <img
              src="/assets/rightArrowGreen.svg"
              alt="right arrow"
              className={classes.rightArrow}
              style={{ marginLeft: "1em" }}
            />
          </Button>
        </Grid>
      </Grid>
      <Grid item md align="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.sessionButton}
          disableRipple
          component={Link}
          href="/freesession"
          onClick={() => setValue(false)}
        >
          Free first session
        </Button>
      </Grid>
    </Grid>
  );

  const smallPage = (
    <Grid
      container
      direction="column"
      className={classes.callBackground}
      style={{
        height: "50em",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item md container direction="column" style={{}}>
        <Grid
          item
          align="right"
          style={{
            marginLeft: matchesXS ? "1em" : matchesSM ? "2em" : 0,
            marginRight: matchesXS ? "1em" : matchesSM ? "2em" : 0,
          }}
        >
          <Typography align="center" variant="h2" className={classes.callTitle}>
            Reiki, Reflexology, Tarot Reading {matchesMD ? null : <br />} and
            Spiritual Counselling
          </Typography>
        </Grid>
        <Grid
          item
          align="center"
          style={{ marginTop: "2em", marginBottom: "2em" }}
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.learnButton}
            component={Link}
            href="/services"
            onClick={() => {
              setValue(0);
              setSelectedIndex(0);
            }}
          >
            Learn More
            <img
              src="/assets/rightArrowGreen.svg"
              alt="right arrow"
              className={classes.rightArrow}
              style={{ marginLeft: "1em" }}
            />
          </Button>
        </Grid>
      </Grid>
      <Grid item md align="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.sessionButton}
          disableRipple
          component={Link}
          href="/freesession"
          onClick={() => setValue(false)}
          style={{ marginRight: 0 }}
        >
          Free first session
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          {/* --- CALL TO ACTION BLOCK --- */}
          <Hidden smDown>{fullPage}</Hidden>
          <Hidden mdUp>{smallPage}</Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
}
