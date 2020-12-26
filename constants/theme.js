import { createMuiTheme } from "@material-ui/core/styles";
import { GreenDark, GreenLight, BloodyRed } from "constants/colors";

export default createMuiTheme({
  palette: {
    primary: {
      main: GreenDark,
    },
    error: {
      main: BloodyRed,
    },
    text: {
      primary: GreenDark,
    },
    background: {
      default: GreenLight,
    },
  },
  typography: {
    fontFamily: "press-start",
    h1: {
      fontWeight: 600,
      letterSpacing: "-2px",
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "-2px",
      fontSize: "1.6rem",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-2px",
      fontSize: "1.2rem",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "-2px",
      fontSize: "0.8rem",
    },
    h5: {
      fontWeight: 600,
      letterSpacing: "-2px",
      fontSize: "0.6rem",
    },
    body1: {
      fontWeight: 600,
      letterSpacing: "-2px",
      fontSize: "30.6rem",
    },
  },
});
