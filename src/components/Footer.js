import { Box, Grid, Typography, IconButton, Link } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      mt="4rem"
      bgcolor="#fff"
      color="#000"
      paddingX={{ xs: "1rem", lg: "2rem" }}
    >
      <Grid container spacing={2} alignItems="center" py="1.5rem">
        <Grid item xs={12} md={4}>
          <Link href="http://www.yacinel.com">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "8rem", height: "2rem", maxWidth: "100%" }}
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="center">
            <IconButton
              color="inherit"
              href="https://www.instagram.com/y_ciin3/"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/yacine-labdaoui/"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "1rem", lg: "1.25rem" } }}
            textAlign="center"
          >
            2023 All rights reserved.
            <br />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
