import React, { useState } from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CallToAction from "../src/ui/CallToAction";
import Prices from "../src/commonComponents/Prices";

const useStyles = makeStyles((theme) => ({
  pricingContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
  radioText: {
    color: theme.palette.common.red,
  },
}));

export default function About({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [service, setService] = useState("");

  const handleChange = (event) => {
    setService(event.target.value);
    console.log(service);
  };

  const services = [
    {
      label: "Reiki",
      name: "reiki",
    },
    {
      label: "Tarot Reading",
      name: "tarot",
    },
    {
      label: "Spiritual Counselling",
      name: "counselling",
    },
    {
      label: "Reflexology",
      name: "reflexology",
    },
  ];

  const reiki = (
    <Prices name="Reiki" deal="£600" data="30, 40, 60, 75, 90, 100" />
  );
  const reflexology = (
    <Prices name="Reflexology" deal="£675" data="30, 50, 60, 85, 90, 115" />
  );
  const tarot = (
    <Prices name="Tarot" deal="£420" data="30, 35, 60, 50, 90, 75" />
  );
  const counselling = (
    <Prices
      name="Spiritual Counselling"
      deal="£480"
      data="30, 45, 60, 60, 90, 105"
    />
  );

  return (
    <Grid item>
      <Head>
        <title key="title">Pricing | Flow Living</title>
        <meta
          name="description"
          key="description"
          content="Holistic healing to live in the Flow | Check out our prices and deals for our available healing services."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Reiki, Reflexology, Tarot and Counselling | Pricing"
        />
        <meta
          property="og:url"
          key="og:url"
          content="flowliving.vercel.app/pricing"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://flowliving.vercel.app/pricing"
        />
      </Head>
      <Grid
        container
        direction="column"
        className={classes.pricingContainer}
        style={{ minHeight: "50em" }}
      >
        <Grid
          item
          style={{
            marginTop: "2em",
            marginLeft: matchesSM ? 0 : "5em",
          }}
          align={matchesXS ? "center" : undefined}
        >
          {/* --- TITLE SECTION --- */}
          <Typography variant="h1" align={matchesSM ? "center" : undefined}>
            Pricing
          </Typography>
        </Grid>
        <Grid
          item
          align={matchesSM ? "center" : "left"}
          style={{
            marginBottom: "1em",
            marginLeft: matchesSM ? "1em" : "5em",
            marginRight: matchesSM ? "1em" : 0,
          }}
        >
          <Typography
            variant="h2"
            align={matchesSM ? "center" : undefined}
            style={{
              lineHeight: 1,
            }}
            gutterBottom
          >
            Which service are you interested in?
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent={matchesXS ? "center" : undefined}
        >
          <Grid item style={{ marginLeft: matchesXS ? 0 : "5em" }}>
            <FormControl>
              <RadioGroup
                aria-label="prices"
                name="prices"
                value={service}
                onChange={handleChange}
              >
                {services.map((service) => (
                  <FormControlLabel
                    key={service.label}
                    value={service.label}
                    control={<Radio />}
                    label={service.label}
                    classes={{ root: classes.radioText }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        {service === "Reflexology"
          ? reflexology
          : service === "Reiki"
          ? reiki
          : service === "Tarot Reading"
          ? tarot
          : service === "Spiritual Counselling"
          ? counselling
          : null}
      </Grid>
      <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </Grid>
  );
}
