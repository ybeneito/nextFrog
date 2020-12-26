import { Box } from "@material-ui/core";

import { Star, Cloud, Rock, Pond, Ground } from "../Background/index";

export const Layout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh" zIndex={10} position="relative">
      <Star left="10" during="20" />
      <Star left="45" during="40" />
      <Star left="90" during="60" />

      <Cloud top="10" left="70" />
      <Cloud top="40" left="20" />

      <Rock />
      <Pond />
      <Ground />
      {children}
    </Box>
  );
};

export default Layout;
