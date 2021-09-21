import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

import CallToAction from "../src/ui/CallToAction";
import Quote from "../src/commonComponents/Quote";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "20em",
    width: "20em",
    [theme.breakpoints.down("xs")]: {
      height: "14em",
      width: "14em",
    },
    border: `2px solid ${theme.palette.common.gold}`,
  },
  subtitle: {
    color: theme.palette.common.red,
    fontSize: "1.5rem",
  },
  leaf: {
    height: "20em",
    width: "20em",
    [theme.breakpoints.down("xs")]: {
      height: "14em",
      width: "14em",
    },
  },
  divider: {
    backgroundColor: theme.palette.common.gold,
    opacity: 0.5,
  },
  aboutContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
}));

export default function About({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item>
      <Grid container direction="column" className={classes.aboutContainer}>
        <Grid
          item
          style={{
            marginTop: "2em",
            marginLeft: matchesSM ? 0 : "5em",
          }}
          align={matchesSM ? "center" : undefined}
        >
          {/* --- TITLE SECTION --- */}
          <Typography variant="h1">About Us</Typography>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: matchesSM ? "1em" : "5em",
            marginRight: matchesSM ? "1em" : "5em",
          }}
          align={matchesSM ? "center" : undefined}
        >
          <Typography variant="h4" className={classes.subtitle} align="center">
            Founded in 2020, after years of giving others healing without even
            realising it, Margaret decided to officially begin offering her
            services. Holding qualifications in Reiki, Reflexology and
            counselling, alongside a lifetimes worth of personal experience
            reading tarot for herself, loved ones and friends, Flow Living was
            born.
          </Typography>
        </Grid>
        <Grid item>
          <Divider
            style={{
              width: matchesXS
                ? "10em"
                : matchesSM
                ? "20em"
                : matchesMD
                ? "30em"
                : "50em",
              margin: "auto",
              marginTop: "2.5em",
              marginBottom: "2.5em",
            }}
            classes={{ root: classes.divider }}
          />
        </Grid>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
        >
          <Grid item container direction="column" sm>
            <Grid
              item
              style={{ marginLeft: matchesSM ? 0 : "5em" }}
              align={matchesSM ? "center" : undefined}
            >
              <Typography variant="h1">Our Purpose</Typography>
            </Grid>
            <Grid
              item
              align={matchesSM ? "center" : undefined}
              style={{
                marginLeft: matchesSM ? "1em" : "5em",
                marginRight: matchesSM ? "1em" : 0,
              }}
            >
              <Typography variant="body1" paragraph>
                Navigating life can be hard, for people of all ages. Losing
                loved ones, experiencing physical illness or ailments, changes
                in lifestyle, the breaking down or experiencing challenges in
                relationships, can all become too much for us all at times.
              </Typography>
              <Typography variant="body1" paragraph>
                Whilst mainstream medicine can be a tremendous help to some in
                many situations, there is still a need for more holistic,
                alternative methods of healing and treatment for many situations
                and circumstances.
              </Typography>
              <Typography variant="body1">
                Flow Living seeks to be an answer to this problem; providing a
                variety of alternative, supportive treatment plans to aid the
                ability to enjoy life more.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sm
            align="center"
            style={{ marginTop: matchesMD ? "2em" : 0 }}
          >
            <img
              src="/assets/leaves.svg"
              alt="leaves"
              className={classes.leaf}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Divider
            style={{
              width: matchesXS
                ? "10em"
                : matchesSM
                ? "20em"
                : matchesMD
                ? "30em"
                : "50em",
              margin: "auto",
              marginTop: "2.5em",
              marginBottom: "2.5em",
            }}
            classes={{ root: classes.divider }}
          />
        </Grid>
        <Grid container direction="column" alignItems="center">
          <Grid item align="center">
            <Typography variant="h2">Our Team</Typography>
          </Grid>
          <Grid
            item
            align="center"
            style={{
              marginRight: matchesXS ? "1em" : 0,
              marginLeft: matchesSM ? "1em" : 0,
            }}
          >
            <Typography variant="body1" paragraph>
              Margaret McKenzie, Founder.
            </Typography>
            <Typography variant="body1" paragraph>
              I started my spiritual journey 20 years ago.
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: "5em" }}>
            <Avatar
              alt="founder, smiling"
              src="/assets/founder.png"
              className={classes.avatar}
            />
          </Grid>
        </Grid>
        <Quote text="Working with Margaret at Flow Living for the past 3 months has helped me transform so many areas of my life. I am forever grateful and so excited to see how much more growth I continue to make." />
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
