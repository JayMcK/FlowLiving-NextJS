import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  quoteContainer: {
    backgroundColor: theme.palette.common.green,
  },
  quoteMark: {
    height: "1em",
    width: "1em",
  },
  quoteText: {
    fontSize: "1.5em",
  },
}));

export default function Quote({ text }) {
  const classes = useStyles();

  return (
    <Grid item>
      {/* --- QUOTE BLOCK --- */}
      <Grid
        container
        direction="row"
        className={classes.quoteContainer}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          style={{
            marginLeft: "2em",
            marginRight: "2em",
            marginBottom: "2em",
            marginTop: "2em",
          }}
        >
          <Typography variant="h4" align="center" className={classes.quoteText}>
            <img
              src="/assets/leftQuotes.svg"
              alt="left quotation mark"
              className={classes.quoteMark}
              style={{ marginRight: "0.5em" }}
            />
            {text}
            <img
              src="/assets/rightQuotes.svg"
              alt="right quotation mark"
              className={classes.quoteMark}
              style={{ marginLeft: "0.5em" }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
