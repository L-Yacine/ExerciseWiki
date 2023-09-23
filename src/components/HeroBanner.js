import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "20vh", xs: "10vh" }, ml: { sm: "5vw" } }}
    position="relative"
    p="2vw"
  >
    <Typography color="#FF2625" fontWeight="600" fontSize="2rem">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "4rem", xs: "3rem" } }}
      mb="2vh"
      mt="3vh"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="2rem" fontFamily="Alegreya" lineHeight="3rem">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "4vh",
          textDecoration: "none",
          width: "20vw",
          textAlign: "center",
          background: "#FF2625",
          padding: "1vh",
          fontSize: "2rem",
          textTransform: "none",
          color: "white",
          borderRadius: "2vw",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "20vw",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
