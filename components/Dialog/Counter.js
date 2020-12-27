import Link from "next/link";
import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export const Counter = ({ goodAnswer, step }) => {
  const theme = useTheme();
  const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));

  let number;
  switch (step) {
    case 0:
      number = "0";
      break;
    case 1:
      number = "0";
      break;
    case 2:
      number = "1";
      break;
    case 3:
      number = "1";
      break;
    case 4:
      number = "2";
      break;
    case 5:
      number = "2";
      break;
    case 6:
      number = "3";
      break;
    case 7:
      number = "3";
      break;
    case 8:
      number = "4";
      break;
    case 9:
      number = "4";
      break;
    case 10:
      number = "5";
      break;
    case 11:
      number = "5";
      break;
    case 12:
      number = "5";
      break;
    default:
      number = "0";
  }

  return (
    <Box
      width={{ xs: "80%", sm: "50%", md: "30%" }}
      height="10%"
      display="flex"
      flexDirection="column"
      zIndex="999"
      padding="20px"
      position="absolute"
      top={{ xs: "10px", md: "0px" }}
    >
      <Typography
        component="h3"
        variant={matchMoreThanPhones ? "h3" : "body1"}
        style={{
          zIndex: "20",
        }}
      >
        QUESTIONS: {number} / 5
      </Typography>
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        alignItems="baseline"
      >
        <Typography
          component="h3"
          variant={matchMoreThanPhones ? "h3" : "body1"}
          style={{
            zIndex: "20",
          }}
        >
          VIES:
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="40%"
          marginLeft="10px"
        >
          <img
            src="/static/img/Hearts/25pc.png"
            alt="coeur 1"
            style={{
              width: matchMoreThanPhones ? "20px" : "10px",
              opacity: goodAnswer >= 1 ? "100%" : "20%",
            }}
          />
          <img
            src="/static/img/Hearts/50pc.png"
            alt="coeur 2"
            style={{
              width: matchMoreThanPhones ? "20px" : "10px",
              opacity: goodAnswer >= 1 ? "100%" : "20%",
            }}
          />
          <img
            src="/static/img/Hearts/75pc.png"
            alt="coeur 3"
            style={{
              width: matchMoreThanPhones ? "20px" : "10px",
              opacity: goodAnswer >= 1 ? "100%" : "20%",
            }}
          />
          <img
            src="/static/img/Hearts/100pc.png"
            alt="coeur 4"
            style={{
              width: matchMoreThanPhones ? "20px" : "10px",
              opacity: goodAnswer >= 1 ? "100%" : "20%",
            }}
          />
          <img
            src="/static/img/Hearts/100pc-red.png"
            alt="coeur 5"
            style={{
              width: matchMoreThanPhones ? "20px" : "10px",
              opacity: goodAnswer >= 1 ? "100%" : "20%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
