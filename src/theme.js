import { createMuiTheme } from "@material-ui/core/styles/";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#3f4fd6",
      main: "#3f4fd6",
      dark: "#3f4fd6",
      contrastText: "#fff",
    },
    secondary: {
      light: "#218ecb",
      main: "#218ecb",
      dark: "#218ecb",
      contrastText: "#fff",
    },
    common: {
      black: "#121212",
      white: "#efefef",
    },
    type: "light",
  },
  background: {
    paper: "#424242",
    default: "#303030",
  },
  text: {
    primary: "#fff",
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)",
    divider: "rgba(255, 255, 255, 0.12)",
  },
  typography: {
    htmlFontSize: 15,
    fontSize: 13,
    fontWeightMedium: "400",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      textTransform: "none", // removes uppercase transformation
    },
  },
};

export default theme;
