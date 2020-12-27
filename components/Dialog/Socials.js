import { Box, Link as MuiLink, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export const Socials = () => {
  const theme = useTheme();
  const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-evenly"
      alignItems="center"
    >
      <MuiLink
        href="https://www.youtube.com/channel"
        underline="none"
        target={"_blank"}
        style={{ zIndex: "30" }}
      >
        <img
          alt="youtube"
          src="/static/img/Socials/Youtube.png"
          style={{
            width: matchMoreThanPhones ? "300px" : "150px",
            height: "auto",
            zIndex: "30",
            cursor: "pointer",
          }}
        />
      </MuiLink>
    </Box>
  );
};

export default Socials;
