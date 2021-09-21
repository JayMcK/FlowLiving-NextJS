import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Service from "../src/commonComponents/Service";
import CallToAction from "../src/ui/CallToAction";
import Quote from "../src/commonComponents/Quote";

const useStyles = makeStyles((theme) => ({
  reikiContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
}));

export default function Reiki({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const info = {
    title: "Reiki",
    text: "The name Reiki is of Japenese origin - with 'rei' meaning universal and 'ki' meaning life energy. As a form of energy healing, Reiki aims to unblock stagnated and trapped energy in the body where either physical or emotional pain has formed. These energy blocks can cause illness and Reiki aims to remove these energy blocks; aiding the natural flow of energy around the body. Improving energy flow is thought to enable relaxation, relieve pain, speed healing and reduce other symptoms of illness.",
    imageInfo: [
      {
        title: "Healing Within",
        image: "/assets/youngWoman.svg",
        alt: "older woman smiling",
      },
      {
        title: "Clarity of Mind",
        image: "/assets/olderWoman.svg",
        alt: "young woman smiling",
      },
      {
        title: "Energy Healing",
        image: "/assets/capWoman.svg",
        alt: "woman smiling",
      },
    ],
  };

  return (
    <Grid item>
      <Grid container direction="column" className={classes.reikiContainer}>
        {/* --- REIKI BLOCK --- */}
        <Service
          info={info}
          value={value}
          selectedIndex={selectedIndex}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
        {/* --- QUOTE BLOCK --- */}
        <Quote text="I was experiencing a lot of anxiety, especially since covid. Since starting my Reiki sessions, my anxiety episodes have been far more manageable and less frequent." />
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
