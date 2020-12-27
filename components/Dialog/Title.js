import Link from "next/link";
import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export const Title = ({ onClick, result }) => {
  const theme = useTheme();
  const matchMoreThanPhones = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      width="100vw"
      height="15%"
      display="flex"
      justifyContent={{ xs: result ? "center" : "flex-end", sm: "center" }}
      alignItems="center"
      zIndex="999"
      onClick={onClick}
    >
      <Link href="/">
        <Typography
          component="h1"
          variant={matchMoreThanPhones ? "h2" : "body1"}
          style={{
            zIndex: "20",
            cursor: "pointer",
            margin: !matchMoreThanPhones && "0px 10px 20px 0px",
          }}
        >
          Next&nbsp;Frog
        </Typography>
      </Link>
    </Box>
  );
};

export default Title;
