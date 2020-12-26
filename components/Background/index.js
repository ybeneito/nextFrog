import { Box } from "@material-ui/core";
import { Soil, Water } from "constants/colors";

export const Star = ({ left, during }) => {
  return (
    <Box
      position="absolute"
      top="0"
      left={left + "%"}
      width="15px"
      height="15px"
      style={{ animation: `fall ${during}s infinite ease-in-out ` }}
    >
      <img src="/static/img/Star.png" alt="étoile" width="100%" height="100%" />
    </Box>
  );
};

export const Cloud = ({ top, left, float }) => {
  return (
    <Box
      position="absolute"
      top={top + "%"}
      zIndex="12"
      left={left + "%"}
      width="250px"
      height="250px"
      style={{
        animation:
          float === "right"
            ? "6s infinite alternate ease-in-out floatRight"
            : "16s infinite alternate floatLeft",
      }}
    >
      <img
        src="/static/img/Clouds.png"
        alt="nuage"
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export const Rock = () => {
  return (
    <Box
      position="absolute"
      bottom="70px"
      left={{ xs: "55%", sm: "70%", md: "80%" }}
      width={{ xs: "130px", sm: "170px", md: "200px" }}
    >
      <img src="/static/img/Rocks.png" alt="rock" width="100%" height="100%" />
    </Box>
  );
};

export const Pond = () => {
  return (
    <Box
      position="absolute"
      bottom="76px"
      width="100%"
      height="34px"
      style={{ backgroundColor: Water, opacity: "80%" }}
    ></Box>
  );
};

export const Ground = () => {
  return (
    <Box
      position="absolute"
      bottom="0"
      width="100%"
      height="76px"
      style={{ backgroundColor: Soil }}
    ></Box>
  );
};
