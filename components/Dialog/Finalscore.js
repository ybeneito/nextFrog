import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export const Finalscore = ({ step }) => {

  const theme = useTheme();
  const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));


  let source;
  switch (step) {
    case "0":
      source = "/static/img/Hearts/0pc.png";
      break;
    case "1":
      source = "/static/img/Hearts/25pc.png";
      break;
    case "2":
      source = "/static/img/Hearts/50pc.png";
      break;
    case "3":
      source = "/static/img/Hearts/75pc.png";
      break;
    case "4":
      source = "/static/img/Hearts/100pc.png";
      break;
    case "5":
      source = "/static/img/Hearts/100pc-red.png";
      break;
    default:
      source = "/static/img/Hearts/0pc.png";
  }

  return (
    <Box
      width="100%"
      height="10%"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="30"
    >
      <img
        src={source}
        alt="Coeurs pixels"
        style= {{
          width="20px",
          height="20px",
          zIndex= 30
        }}
      
      />
      <Typography component="h2" variant={matchMoreThanPhones ? "h2" : "body1"} style={{margin:"0% 20px", textAlign="center"}}>
          TON SCORE EST DE&nbsp;: {score}

      </Typography>
      <img
        src={source}
        alt="Coeurs pixels"
        style= {{
          width="20px",
          height="20px",
          zIndex= 30
        }}
      
      />
    </Box>
  );
};

export default Finalscore;
