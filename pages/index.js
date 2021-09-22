import React from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Quote from "../src/commonComponents/Quote";
import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
  heroBackground: {
    backgroundImage: `url("/assets/homeHeroBackground.jpg")`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      backgroundAttachment: "fixed",
    },
  },
  sessionButton: {
    ...theme.typography.sessionButton,
    fontSize: "1.75rem",
    borderRadius: 50,
    paddingLeft: "1em",
    paddingRight: "1em",
    marginRight: "1em",
    height: 80,
    width: 300,
    color: theme.palette.common.gold,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  heroTitle: {
    color: "#fff",
  },
  learnButton: {
    ...theme.typography.learnButton,
  },
  rightArrow: {
    marginLeft: "1em",
  },
  siteLinksIcon: {
    height: "15em",
    [theme.breakpoints.down("xs")]: {
      height: "10em",
    },
  },
  siteLinksText: {
    fontSize: "1.25rem",
    color: theme.palette.grey[700],
  },
  cardBackground: {
    backgroundColor: theme.palette.common.gold,
  },
  cardContainer: {
    borderRadius: 0,
    paddingRight: "2em",
    paddingLeft: "2em",
    paddingTop: "3em",
    paddingBottom: "3em",
  },
  infoBackground: {
    backgroundImage: `url("/assets/infoBackground.png")`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  specialText: {
    fontFamily: "Cookie",
    color: theme.palette.common.gold,
    fontSize: "1.5rem",
  },
}));

export default function Home({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const fullHome = (
    <Grid
      container
      direction="row"
      className={classes.heroBackground}
      style={{ height: "50em", marginTop: "1em" }}
      alignItems="center"
    >
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
      <Grid item md container direction="column" style={{ marginRight: "5em" }}>
        <Grid item align="right">
          <Typography variant="h2" className={classes.heroTitle}>
            Reiki, Reflexology, Tarot Reading {matchesMD ? null : <br />} and
            Spiritual Counselling
          </Typography>
        </Grid>
        <Grid item align="right">
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
              src="/assets/rightArrow.svg"
              alt="right arrow"
              className={classes.rightArrow}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  const smallHome = (
    <Grid
      container
      direction="column"
      className={classes.heroBackground}
      style={{
        height: "50em",
        marginTop: "1em",
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
          <Typography align="center" variant="h2" className={classes.heroTitle}>
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
              src="/assets/rightArrow.svg"
              alt="right arrow"
              className={classes.rightArrow}
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
      <Head>
        <title key="title">
          Reiki, Reflexology, Tarot and Counselling Services | Flow Living
        </title>
        <meta
          name="description"
          key="description"
          content="Alernative, holistic healing methods tailored to the unique needs of each individual client. Sign up today for a free first 30minute session!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Reiki, Reflexology, Tarot and Counselling | Flow Living"
        />
        {/* --- FILL THIS IN AFTER DEPLOYMENT --- */}
        <meta property="og:url" key="og:url" content="" />
        <link rel="canonical" key="canonical" href="" />
      </Head>
      <Grid container direction="column" className={classes.homeContainer}>
        <Grid item>
          {/* --- HERO BLOCK --- */}
          <Hidden smDown>{fullHome}</Hidden>
          <Hidden mdUp>{smallHome}</Hidden>
        </Grid>
        {/* --- QUOTE BLOCK --- */}
        <Quote text="Since starting my spiritual conselling sessions, I have a new found trust in myself, more clarity of thought and feel more like myself." />
        {/* --- MAIN SITE LINKS BLOCK --- */}
        <Grid item>
          {/* --- OUR STORY BLOCK --- */}
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "5em", marginBottom: "5em" }}
            alignItems="center"
          >
            <Grid
              item
              md
              container
              direction="column"
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                marginRight: matchesSM ? 0 : "1em",
                maxWidth: "40em",
              }}
              justifyContent="center"
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item align={matchesSM ? "center" : undefined}>
                <Typography variant="h2">Flow Living - Our Story</Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                  align={matchesSM ? "center" : undefined}
                >
                  Founded in 2020, Flow Living has the purpose of aiding people
                  to find their flow.
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                  align={matchesSM ? "center" : undefined}
                >
                  With society making it so easy to get out of touch with
                  ourselves, flow living seeks to help us reconnect with all
                  aspects of ourselves in{" "}
                  <span className={classes.specialText}>meaningful ways.</span>
                </Typography>
              </Grid>
              <Grid item style={{ marginBottom: matchesSM ? "2em" : 0 }}>
                <Button
                  component={Link}
                  href="/about"
                  onClick={() => {
                    setValue(3);
                  }}
                  className={classes.learnButton}
                >
                  Learn More
                  <img
                    src="/assets/rightArrow.svg"
                    alt="right arrow"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid item md>
              <img
                src="/assets/meditate.svg"
                alt="woman meditating"
                className={classes.siteLinksIcon}
              />
            </Grid>
          </Grid>
          {/* --- SERVICES BLOCK --- */}
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "5em", marginBottom: "5em" }}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid
              item
              md
              container
              direction="column"
              style={{
                maxWidth: "40em",
              }}
              justifyContent="center"
              alignItems={matchesSM ? "center" : "flex-end"}
            >
              <Grid item>
                <Typography variant="h2">Services</Typography>
              </Grid>
              <Grid
                item
                align={matchesSM ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                >
                  We offer 4 related forms of healing:
                </Typography>
              </Grid>
              <Grid
                item
                align={matchesSM ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : "1em",
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                >
                  Reiki, Tarot Readings, Spiritual Counselling and Refloxogy.
                  You can choose any, all or a combination of treatments that
                  you feel best{" "}
                  <span className={classes.specialText}>meets your needs.</span>
                </Typography>
              </Grid>
              <Grid
                item
                style={{ marginBottom: matchesSM ? "2em" : undefined }}
              >
                <Button
                  component={Link}
                  href="/services"
                  onClick={() => {
                    setValue(3);
                    setSelectedIndex(0);
                  }}
                  className={classes.learnButton}
                >
                  Learn More
                  <img
                    src="/assets/rightArrow.svg"
                    alt="right arrow"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md
              align={matchesSM ? "center" : "left"}
              style={{
                maxWidth: "20em",
                marginRight: matchesSM ? 0 : "5em",
                marginLeft: matchesSM ? 0 : "1.5em",
              }}
            >
              <img
                src="/assets/shopping.svg"
                alt="woman standing at screen"
                className={classes.siteLinksIcon}
              />
            </Grid>
          </Grid>
          {/* --- PRICING BLOCK --- */}
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "5em", marginBottom: "5em" }}
            alignItems="center"
          >
            <Grid
              item
              md
              container
              direction="column"
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                marginRight: matchesSM ? 0 : "1em",
                maxWidth: "40em",
              }}
              justifyContent="center"
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item align={matchesSM ? "center" : undefined}>
                <Typography variant="h2">Pricing</Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                  align={matchesSM ? "center" : undefined}
                >
                  Get a quick, immediate price estimate for your tailored
                  treatment plan.
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                  align={matchesSM ? "center" : undefined}
                >
                  It only takes{" "}
                  <span className={classes.specialText}>a minute!</span>
                </Typography>
              </Grid>
              <Grid item style={{ marginBottom: matchesSM ? "2em" : 0 }}>
                <Button
                  component={Link}
                  href="/pricing"
                  onClick={() => {
                    setValue(2);
                  }}
                  className={classes.learnButton}
                >
                  Learn More
                  <img
                    src="/assets/rightArrow.svg"
                    alt="right arrow"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid item md>
              <img
                src="/assets/pricing.svg"
                alt="two women holding a pound sign"
                className={classes.siteLinksIcon}
              />
            </Grid>
          </Grid>
          {/* --- FREE SESSION BLOCK --- */}
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "5em", marginBottom: "5em" }}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid
              item
              md
              container
              direction="column"
              style={{
                maxWidth: "40em",
              }}
              justifyContent="center"
              alignItems={matchesSM ? "center" : "flex-end"}
            >
              <Grid item>
                <Typography variant="h2">Free First Session!</Typography>
              </Grid>
              <Grid
                item
                align={matchesSM ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : 0,
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                >
                  Book a free first 30minute session.
                </Typography>
              </Grid>
              <Grid
                item
                align={matchesSM ? "center" : "right"}
                style={{
                  marginLeft: matchesSM ? "1em" : "1em",
                  marginRight: matchesSM ? "1em" : 0,
                }}
              >
                <Typography
                  paragraph
                  variant="subtitle1"
                  className={classes.siteLinksText}
                >
                  This will allow us the opportunity to get to know eachother
                  and to together decide on the best initial treatment plan{" "}
                  <span className={classes.specialText}>for you.</span>
                </Typography>
              </Grid>
              <Grid
                item
                style={{ marginBottom: matchesSM ? "2em" : undefined }}
              >
                <Button
                  component={Link}
                  href="/freesession"
                  onClick={() => {
                    setValue(5);
                  }}
                  className={classes.learnButton}
                >
                  Learn More
                  <img
                    src="/assets/rightArrow.svg"
                    alt="right arrow"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md
              align={matchesSM ? "center" : "left"}
              style={{
                maxWidth: "20em",
                marginRight: matchesSM ? 0 : "5em",
                marginLeft: matchesSM ? 0 : "1.5em",
              }}
            >
              <img
                src="/assets/piggyBank.svg"
                alt="piggy bank"
                className={classes.siteLinksIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.cardBackground}>
          {/* --- CARD BLOCK --- */}
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ height: "50em" }}
          >
            <Card elevation={0} classes={{ root: classes.cardContainer }}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item align="center">
                    <Typography variant="h3">
                      Our Approach to healing is Holistic
                    </Typography>
                  </Grid>
                  <Grid item align="center">
                    <Typography
                      variant="h5"
                      style={{ color: theme.palette.grey[700] }}
                      paragraph
                    >
                      We work to heal the underlying issues, not just the
                      symptoms.
                    </Typography>
                  </Grid>
                  <Grid item align="center">
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
                        src="/assets/rightArrow.svg"
                        alt="right arrow"
                        className={classes.rightArrow}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item className={classes.infoBackground}>
          {/* --- INFO BLOCK --- */}
          <Grid
            container
            direction={matchesXS ? "column" : "row"}
            style={{ height: "50em" }}
            alignItems="center"
            justifyContent="space-around"
          >
            <Grid
              item
              sm
              container
              direction="column"
              alignItems={matchesSM ? "center" : "flex-start"}
              style={{
                maxWidth: "20em",
                marginLeft: matchesXS ? 0 : matchesSM ? "2em" : 0,
              }}
            >
              <Grid item>
                <Typography variant="h2">About Us</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  style={{ color: theme.palette.grey[700] }}
                  paragraph
                >
                  Who are we?
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.learnButton}
                  component={Link}
                  href="/about"
                  onClick={() => {
                    setValue(3);
                  }}
                >
                  Learn More
                  <img
                    src="/assets/rightArrow.svg"
                    alt="right arrow"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              container
              direction="column"
              alignItems={matchesXS ? "center" : "flex-end"}
              style={{
                maxWidth: "20em",
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : 0,
              }}
            >
              <Grid item>
                <Typography variant="h2">Contact Us</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  style={{ color: theme.palette.grey[700] }}
                  paragraph
                >
                  Get in touch!
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.learnButton}
                  component={Link}
                  href="/contact"
                  onClick={() => {
                    setValue(4);
                  }}
                >
                  Learn More
                  <img
                    src="/assets/rightArrow.svg"
                    alt="right arrow"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* --- QUOTE BLOCK --- */}
        <Quote text="I have had two Reiki sessions along with 4 reflexology sessions and my chronic back pain has already begun to ease. I don't know how it works, but it works!" />
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
