import {
  Box,
  Typography,
  Button as MuiButton,
  Link as MuiLink,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { YellowDark } from "constants/colors";

export const Button = ({ result, content, step, onClick, selected }) => {
  const theme = useTheme();
  const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));

  // recupère via content le contenu du Bouton et le change en fonction de l'etape où en est l'app.
  let text;

  content &&
    content.map((element) => {
      if (step === element.step) {
        text = element.text;
      }
    });

  return result ? (
    <Box
      height={{ xs: "50px", sm: "65px", md: "80px" }}
      display="flex"
      left={{
        xs: "calc((100vw - 160px)/2)",
        sm: "calc((100vw - 200px)/2)",
        md: "calc((100vw - 340px)/2)",
      }}
      position="absolute"
      width={{ xs: "160px", sm: "200px", md: "340px" }}
      bottom="25%"
      zIndex="30"
    >
      <MuiButton
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: YellowDark,
          borderRadius: "40px",
          border: "3px solid black",
        }}
      >
        <MuiLink
          href="https://nextjs.org/docs/getting-started"
          underline="none"
          target={"_blank"}
          style={{ zIndex: "30" }}
        >
          <Typography
            component="h3"
            variant={matchMoreThanPhones ? "h3" : "body1"}
          >
            Au revoir !
          </Typography>
        </MuiLink>
      </MuiButton>
    </Box>
  ) : (
    <Box
      height={{ xs: "50px", sm: "65px", md: "80px" }}
      display="flex"
      left={{
        xs: "calc((100vw - 160px)/2)",
        sm: "calc((100vw - 200px)/2)",
        md: "calc((100vw - 340px)/2)",
      }}
      position="absolute"
      width={{ xs: "160px", sm: "200px", md: "340px" }}
      bottom={{ xs: "20%", sm: "15%", md: "35%" }}
      zIndex="40"
    >
      {(step == 2 || step == 4 || step == 6 || step == 8 || step == 10) &
      (selected === 0) ? (
        <MuiButton
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: YellowDark,
            borderRadius: "40px",
            border: "3px solid black",
          }}
        >
          <Typography
            component="h3"
            variant={matchMoreThanPhones ? "h3" : "body1"}
          >
            Selectionner une reponse
          </Typography>
        </MuiButton>
      ) : (
        <MuiButton
          onClick={onClick}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: YellowDark,
            borderRadius: "40px",
            border: "3px solid black",
          }}
        >
          <Typography
            component="h3"
            variant={matchMoreThanPhones ? "h3" : "body1"}
          >
            {text}
          </Typography>
        </MuiButton>
      )}
    </Box>
  );
};
export default Button;
