import { createTheme } from "@material-ui/core/styles";

const flowRed = "#B86767";
const flowGold = "#F7D59C";
const flowGreen = "#CEE5D0";

export default createTheme({
  palette: {
    common: {
      red: flowRed,
      gold: flowGold,
      green: flowGreen,
    },
    primary: {
      main: flowRed,
    },
    secondary: {
      main: flowGold,
    },
  },
  typography: {
    h1: {
      fontFamily: "Josefin Sans",
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.5,
      color: flowRed,
    },
    h2: {
      fontFamily: "Josefin Sans",
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: flowRed,
    },
    h3: {
      fontFamily: "Cookie",
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: flowRed,
    },
    h4: {
      fontFamily: "Josefin Sans",
      fontSize: "2rem",
      fontWeight: 200,
      lineHeight: 1.5,
      fontStyle: "italic",
    },
    h5: {
      fontFamily: "Josefin Sans",
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: flowRed,
      textTransform: "none",
    },
    h6: {
      fontFamily: "Josefin Sans",
      fontSize: "2rem",
      fontWeight: 200,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: "Josefin Sans",
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontFamily: "Josefin Sans",
      fontSize: "1.1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: "Josefin Sans",
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    learnButton: {
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.5,
      textTransform: "none",
      borderRadius: 0,
      color: flowRed,
      backgroundColor: "transparent",
      border: `2px solid ${flowRed}`,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    sessionButton: {
      fontFamily: "Josefin Sans",
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: "none",
      color: "#fff",
    },
  },
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: flowGold,
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "#fff",
        border: `1px solid ${flowGold}`,
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiInputLabel: {
      root: {
        color: flowRed,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: flowRed,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${flowRed}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${flowGold}`,
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    MuiRadio: {
      root: {
        color: flowGold,
      },
    },
  },
});
