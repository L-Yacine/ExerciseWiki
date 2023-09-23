import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
      fontFamily: "'Roboto', sans-serif",
    }}
    px="20px"
  >
    <Link style={{ display: "flex" }} to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      />
      <h4
        style={{
          fontSize: "1.5rem",
          color: "#ffdede",
          marginTop: "0.7rem",
        }}
      >
        Exercise-wiki
      </h4>
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="'Roboto', sans-serif"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#ffdede",
          borderBottom: `3px solid #FF6347`,
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#ffdede" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
