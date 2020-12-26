import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import { YellowLight, GreenLight } from "constants/colors";

const AnimatedTitle = styled.h2`
  text-shadow: 0 20px #2e2e31, 0 40px 60px #2e2e31;
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  &::after {
    content: "";
    padding: 0.9em 0.4em;
    position: absolute;
    left: 50%;
    width: 130%;
    height: 120px;
    top: 50%;
    display: block;
    border: 15px solid ${GreenLight};
    border-radius: 20px;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    animation: 10s infinite alternate ease-in-out rolling;
    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) ${GreenLight} ${GreenLight};
    box-shadow: 25px 25px 25px rgba(46, 46, 49, 0.8);
  }

  &::before {
    content: "";
    padding: 0.9em 0.4em;
    position: absolute;
    left: 50%;
    width: 130%;
    height: 120px;
    top: 50%;
    display: block;
    border: 15px solid ${GreenLight};
    border-radius: 20px;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    animation: 10s infinite alternate ease-in-out rolling;
    border-color: ${GreenLight} ${GreenLight} rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    z-index: -1;
  }
`;

export const Loader = ({ text, status }) => {
  const theme = useTheme();
  const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      width="100vw"
      height="100vh"
      z-index={999}
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      padding="5%"
      style={{ backgroundColor: YellowLight }}
    >
      <AnimatedTitle
        style={{ fontSize: matchMoreThanPhones ? "2rem" : "1rem" }}
      >
        {text}
      </AnimatedTitle>
      <Box textAlign="center">
        <Typography
          component="h2"
          variant={matchMoreThanPhones ? "h1" : "h3"}
          style={{ animation: "5s infinite alternate ease-in-out loader" }}
        >
          {status ? "Chargement en cours..." : "Prêt !"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Loader;
