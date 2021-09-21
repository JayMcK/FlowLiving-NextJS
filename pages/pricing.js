import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Brightness5Icon from "@material-ui/icons/Brightness5";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import CallToAction from "../src/ui/CallToAction";
import Quote from "../src/commonComponents/Quote";
import Prices from "../src/commonComponents/Prices";

const useStyles = makeStyles((theme) => ({
  pricingContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
  buttonIcon: {
    height: "10em",
    width: "10em",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: theme.palette.common.green,
      borderRadius: 0,
    },
  },
  sessionButton: {
    textTransform: "none",
    borderRadius: 0,
    border: `2px solid ${theme.palette.common.green}`,
    height: 50,
    width: 200,
  },
  divider: {
    backgroundColor: theme.palette.common.gold,
    opacity: 0.5,
  },
  serviceButton: {
    backgroundColor: "transparent",
    "&:hover": { backgroundColor: theme.palette.secondary.light },
    "&:focus": {
      backgroundColor: theme.palette.secondary.light,
    },
    border: `1px solid ${theme.palette.common.green}`,
    boxShadow: "none",
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
            marginLeft: matchesXS ? 0 : "5em",
          }}
          align={matchesXS ? "center" : undefined}
        >
          {/* --- TITLE SECTION --- */}
          <Typography variant="h1" align={matchesXS ? "center" : undefined}>
            Pricing
          </Typography>
        </Grid>
        <Grid
          item
          align="left"
          style={{
            marginBottom: "1em",
            marginLeft: matchesXS ? "1em" : "5em",
            marginRight: matchesXS ? "1em" : 0,
          }}
        >
          <Typography
            variant="h2"
            align={matchesXS ? "center" : undefined}
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
