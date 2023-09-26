import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "10vh", xs: "5vh" }, ml: { sm: "5vw" } }}
    position="relative"
    p="2vw"
  >
    <Typography color="#FF2625" fontWeight="600" fontSize="1.5rem">
      {" "}
      {/* Adjust font size */}
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "2.5rem", xs: "2rem" } }} // Adjust font size
      mb="2vh"
      mt="2vh" // Adjust margin top
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="1rem" fontFamily="Alegreya" lineHeight="2rem">
      {" "}
      {/* Adjust font size */}
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "3vh", // Adjust margin top
          textDecoration: "none",
          width: "20vw",
          textAlign: "center",
          background: "#FF2625",
          padding: "1vh",
          fontSize: "1.2rem", // Adjust font size
          textTransform: "none",
          color: "white",
          borderRadius: "1vw", // Adjust border radius
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
        fontSize: "10vw", // Adjust font size
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
