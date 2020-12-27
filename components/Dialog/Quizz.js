import dynamic from "next/dynamic";
import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { GreenDarkOpacity } from "constants/colors";

const Answer = ({ number, text, onClick, selected }) => {
  const theme = useTheme();
  const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Button
      onclick={onClick}
      style={{
        width: matchMoreThanPhones ? "40%" : "50%",
        zIndex: "20",
        backgroundColor: selected === number ? GreenDarkOpacity : "none",
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={matchMoreThanPhones ? "h5" : "body1"} component="h4">
        {text}
      </Typography>
    </Button>
  );
};

export const Quizz = ({ step, content, selected, setSelected }) => {
  let response1;
  let response2;
  let response3;
  let response4;

  content &&
    content.map((element) => {
      if (step === element.step) {
        const responses = Object.values(element.proposal);
        response1 = responses[0];
        response2 = responses[1];
        response3 = responses[2];
        response4 = responses[3];
      }
    });

  return step == 0 || step == 1 ? (
    " "
  ) : (
    <Box
      height="30%"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      flexWrap="wrap"
      padding={{ xs: "2% 1%", sm: "2% 5%" }}
    >
      <Answer
        selected={selected}
        number={1}
        text={responses1}
        onClick={() => {
          setSelected(1);
        }}
      />
      <Answer
        selected={selected}
        number={2}
        text={responses2}
        onClick={() => {
          setSelected(2);
        }}
      />
      <Answer
        selected={selected}
        number={3}
        text={responses3}
        onClick={() => {
          setSelected(3);
        }}
      />
      <Answer
        selected={selected}
        number={4}
        text={responses4}
        onClick={() => {
          setSelected(4);
        }}
      />
    </Box>
  );
};

export default Quizz;
