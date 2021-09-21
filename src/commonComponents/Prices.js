import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  packageSpecialText: {
    fontSize: "1.75rem",
    color: theme.palette.common.red,
    fontWeight: 700,
  },
  packageText: {
    fontSize: "1.5rem",
    color: theme.palette.grey[700],
  },
  packageTitle: {
    fontSize: "1.75rem",
    color: theme.palette.grey[700],
    fontWeight: 700,
  },
  divider: {
    backgroundColor: theme.palette.common.gold,
    opacity: 0.5,
    width: "50em",
    [theme.breakpoints.down("sm")]: {
      width: "40em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  title: {
    fontSize: "1.25rem",
    fontFamily: "Josefin Sans",
    color: theme.palette.grey[700],
  },
  text: {
    fontSize: "1rem",
    fontFamily: "Josefin Sans",
    color: theme.palette.grey[700],
  },
  dealContainer: {
    backgroundColor: theme.palette.common.green,
  },
  dealDivider: {
    backgroundColor: theme.palette.grey[700],
    opacity: 0.5,
  },
  table: {
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
}));

export default function Prices({ name, data, deal }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  let info = data.split(",");

  function createData(duration, price) {
    console.log("info", info[0]);
    return { duration, price };
  }

  const rows = [
    createData(info[0], info[1]),
    createData(info[2], info[3]),
    createData(info[4], info[5]),
  ];

  return (
    <Grid item>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Divider
            style={{
              margin: "auto",
              marginBottom: "2.5em",
              marginTop: "2.5em",
            }}
            classes={{ root: classes.divider }}
          />
        </Grid>
        <Grid item align="center" className={classes.table}>
          <Grid item>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
              {name}
            </Typography>
          </Grid>
          <TableContainer>
            <Table aria-label="prices table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" classes={{ root: classes.title }}>
                    Session duration (minutes)
                  </TableCell>
                  <TableCell align="center" classes={{ root: classes.title }}>
                    Price(£)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.duration}>
                    <TableCell
                      classes={{ root: classes.text }}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {row.duration}
                    </TableCell>
                    <TableCell classes={{ root: classes.text }} align="center">
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item style={{ marginTop: "3em", width: "100%" }}>
          <Grid
            container
            direction="column"
            alignItems="center"
            className={classes.dealContainer}
          >
            <Grid
              item
              style={{
                marginTop: "1em",
                marginLeft: matchesXS ? "1em" : 0,
                marginRight: matchesXS ? "1em" : 0,
              }}
              align="center"
            >
              <Typography className={classes.packageTitle}>
                {name} Package Deal
              </Typography>
            </Grid>
            <Divider
              style={{
                width: "15em",
                marginTop: "0.5em",
                marginBottom: "0.5em",
              }}
            />
            <Grid item style={{ marginBottom: "1em" }} align="center">
              <Typography className={classes.packageText}>
                10 x 60min sessions for:{" "}
                <span className={classes.packageSpecialText}>{deal}</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
