import React from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Service from "../src/commonComponents/Service";
import CallToAction from "../src/ui/CallToAction";
import Quote from "../src/commonComponents/Quote";

const useStyles = makeStyles((theme) => ({
  reflexologyContainer: {
    border: `1px solid ${theme.palette.common.gold}`,
  },
}));

export default function Reflexology({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const info = {
    title: "Reflexology",
    text: "Refloxology is often classed as an alternative, complementary health therapy. It is non-invasive and is centered around the theory that the different points on the hands, feet, lower leg, face and ears correspond to different areas of the body. These are the areas through which the Reflexologist focuses in order to provide healing to different ailments in the body. Refloxology is a touch therapy and can be used to treat phsyical, emotional and psychological issues.",
    imageInfo: [
      {
        title: "Healing the Body",
        image: "/assets/healing.svg",
        alt: "woman on one knee",
      },
      {
        title: "The Hands and Feet",
        image: "/assets/hands.svg",
        alt: "two hands passing a key",
      },
      {
        title: "The Chakras",
        image: "/assets/chakras.svg",
        alt: "woman meditating",
      },
    ],
  };

  return (
    <Grid item>
      <Head>
        <title key="title">Reflexology - Services | Flow Living</title>
        <meta
          name="description"
          key="description"
          content="Our Reflexology service enables us to use the body as a guide to uncover and release trapped energy and relieve physical, mental and emotional tension."
        />
        <meta
          property="og:title"
          key="og:title"
          content="Reiki, Reflexology, Tarot and Counselling | Reflexology"
        />
        <meta
          property="og:url"
          key="og:url"
          content="flowliving.vercel.app/reflexology"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://flowliving.vercel.app/reflexology"
        />
      </Head>
      <Grid
        container
        direction="column"
        className={classes.reflexologyContainer}
      >
        {/* --- REIKI BLOCK --- */}
        <Service
          info={info}
          value={value}
          selectedIndex={selectedIndex}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
        {/* --- QUOTE BLOCK --- */}
        <Quote text="I have been having reflexology for about 4 years to help manage my chronic back pain. Since starting my sessions with Flow Living, I have noticed a significant reduction in the pain I feel on a daily basis." />
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
