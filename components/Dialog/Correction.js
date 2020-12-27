import dynamic from "next/dynamic";
import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { BloodyRed, GreenLime } from "constants/colors";

const ReactTypingEffect = dynamic(() => import("react-typing-effect"), {
  ssr: false,
});

export const Correction = ({ step, selected, textCorrection }) => {
  const theme = useTheme();
  const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));

  let text;

  textCorrection &&
    textCorrection.map((element) => {
      if (step === element.step) {
        if ((selected = element.reponse)) {
          text = (
            <Typography
              component="h4"
              variant={matchMoreThanPhones ? "h4" : "body1"}
              style={{ zIndex: 20, color: GreenLime, textAlign: "center" }}
            >
              Bonne Réponse <br /> - <br />
              <ReactTypingEffect
                text={element.text}
                typingDelay={500}
                speed={20}
                eraseDelay={9999}
              />
            </Typography>
          );
        } else {
          text = (
            <Typography
              component="h4"
              variant={matchMoreThanPhones ? "h4" : "body1"}
              style={{ zIndex: 20, color: BloodyRed, textAlign: "center" }}
            >
              Mauvaise Réponse <br /> - <br />
              <ReactTypingEffect
                text={element.text}
                typingDelay={500}
                speed={20}
                eraseDelay={9999}
              />
            </Typography>
          );
        }
      }
    });

  return step == 3 || step == 5 || step == 7 || step == 9 || step == 11 ? (
    <Box
      height={{ xs: "30%", sm: "30%", md: "5%" }}
      position="absolute"
      left={{
        xs: "calc((100vw - 98%)/2)",
        sm: "calc((100vw - 60%)/2)",
        md: "calc((100vw - 40%)/2)",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={{
        xs: "98%",
        sm: "60%",
        md: "40%",
      }}
      bottom="20%"
      zIndex="20"
    >
      {text}
    </Box>
  ) : (
    " "
  );
};

export default Correction;
