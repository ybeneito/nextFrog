import dynamic from "next/dynamic";
import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { YellowLight } from "constants/colors";

export const Script = ({ step, content, result }) => {
  const theme = useTheme();
  const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));

  // Change le script en fonction des étapes de l'app et du resultat de l'utilisateur
  let text;
  result & (result > 2)
    ? (text = `Félicitations ! Tu as reussi ce test!`)
    : (text = `Aïe ! Retente ta chance ou retourne lire la doc ;)`);

  content &&
    content.map((element) => {
      if (step === element.step) {
        text = element.text;
      }
    });

  // Permet d'importer dynamiquement une librairie coté client car ne fonctionnerai pas coté server.
  const ReactTypingEffect = dynamic(() => import("react-typing-effect"), {
    ssr: false,
  });

  return (
    <Box
      height="12%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      style={{
        backgroundColor: YellowLight,
        borderRadius: "20px",
        width: "80%",
        margin: "auto",
        borderStyle: "double",
        position: "relative",
        zIndex: "30",
      }}
    >
      <Typography
        variant={matchMoreThanPhones ? "h3" : "body1"}
        component="h3"
        style={{ zIndex: 30 }}
      >
        FRAUGUE :{" "}
        {(step >= 2) & (step <= 11) ? (
          text
        ) : (
          <ReactTypingEffect
            text={text}
            typingDelay={0}
            speed={60}
            eraseDelay={99999}
          />
        )}
      </Typography>
    </Box>
  );
};

export default Script;
