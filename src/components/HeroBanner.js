import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: "10vh", xs: "5vh" },
      ml: { sm: "5vw" },
      // Primary color
    }}
    position="relative"
    p="2vw"
  >
    <Typography color="#8f7564" fontWeight="600" fontSize="1.5rem">
      {" "}
      {/* Secondary color */}
      Boost Your Performance
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "2.5rem", xs: "2rem" }, color: "#000524" }} // Secondary color
      mb="2vh"
      mt="2vh"
    >
      Explore, Learn, <br />
      and Transform!
    </Typography>
    <Typography
      variant="caption"
      fontSize="1.2rem"
      display="flex"
      width="60vw"
      height="30vh"
      lineHeight="1.6rem"
      color="#8B4513" // Neutral color
    >
      Check out our one-stop library for exercise-related information,
      illustrations and videos.
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          opacity: "80%",
          marginTop: "3vh",
          textDecoration: "none",
          width: "30vw",
          textAlign: "center",
          background: "#FFA500", // Accent color
          padding: "1vh",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          fontSize: "1.2rem",
          textTransform: "none",
          color: "#FFF8DC", // Secondary color
          borderRadius: "1vw",
          textShadow: "#000 1px 0 1.5px",
        }}
        onMouseOver={(e) => (e.target.style.background = "#FF4500")} // Highlight color on hover
        onMouseOut={(e) => (e.target.style.background = "#FFA500")} // Accent color when not hovering
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
        fontSize: "10vw",
        borderColor: "#8B4513", // Neutral color for border
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
