import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="4rem" bgcolor="#FFF3F4" paddingX={{ xs: "1rem", lg: "2rem" }}>
    <Stack
      gap={{ xs: "1rem", lg: "2.5rem" }}
      sx={{ alignItems: "center" }}
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent={{ xs: "center", lg: "space-between" }}
      pt="1.5rem"
    >
      <img
        src={Logo}
        alt="logo"
        style={{ width: "10rem", height: "2rem", maxWidth: "100%" }}
      />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { xs: "1.25rem", lg: "1.75rem" } }}
      mt="1.5rem"
      textAlign="center"
      pb="2.5rem"
    >
      Made with ❤️ by Yacine-L
    </Typography>
  </Box>
);

export default Footer;
