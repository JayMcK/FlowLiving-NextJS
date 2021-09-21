import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Service from "../src/commonComponents/Service";
import CallToAction from "../src/ui/CallToAction";
import Quote from "../src/commonComponents/Quote";

const useStyles = makeStyles((theme) => ({
  tarotContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
}));

export default function Tarot({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const info = {
    title: "Tarot",
    text: "Tarot card reading is where practioners use tarot cards to gain insight into the past, future or present. Tarot cards can either be used as the main source of insight, or they can be used alongside the practioners clairvoyant, clairsentient or clairaudient abilities. Tarot Cards can be used to provide clarity on decisions, guidance on questions or support and comfort through difficult life experiences.",
    imageInfo: [
      {
        title: "The Cards",
        image: "/assets/cards.svg",
        alt: "two tarot cards",
      },
      {
        title: "Visions",
        image: "/assets/visions.svg",
        alt: "woman with eyes closed",
      },
      { title: "Meaning", image: "/assets/meaning.svg", alt: "looking glass" },
    ],
  };

  return (
    <Grid item>
      <Grid container direction="column" className={classes.tarotContainer}>
        {/* --- REIKI BLOCK --- */}
        <Service
          info={info}
          value={value}
          selectedIndex={selectedIndex}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
        <Quote text="Tarot is my go-to when I am in need of some guidance in my life or am in the middle of a difficult life experience. My session with Flow Living brought me so many insights, I cannot wait for our second session!" />
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
