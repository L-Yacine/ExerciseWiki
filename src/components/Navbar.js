import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box, // Add Box component for layout
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // State to control the mobile menu open/close
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-evenly"
      alignItems="center" // Center align items in both mobile and desktop view
      sx={{
        gap: { sm: "2rem", xs: "1rem" },
        mt: { sm: "2rem", xs: "1rem" },
        fontFamily: "'Roboto', sans-serif",
        px: "1rem",
      }}
    >
      <Box // Add a Box component for layout
        display="flex" // Display children horizontally
        alignItems="center" // Center align items horizontally
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "3rem",
              height: "3rem",
              marginRight: "1rem",
            }}
          />
          <Typography
            variant="h4"
            style={{
              fontSize: "1.5rem",
              color: "#ffdede",
              marginTop: "0.2rem",
            }}
          >
            Exercise-wiki
          </Typography>
        </Link>
      </Box>

      {/* Conditionally render mobile menu button */}
      {isMobile && (
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileMenu}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Conditionally render mobile menu drawer */}
      {isMobile && (
        <Drawer anchor="right" open={mobileMenuOpen} onClose={toggleMobileMenu}>
          <List>
            <ListItem
              ListItemButton
              component={Link}
              to="/"
              onClick={toggleMobileMenu}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              ListItemButton
              component="a"
              href="#exercises"
              onClick={toggleMobileMenu}
            >
              <ListItemText primary="Exercises" />
            </ListItem>
          </List>
        </Drawer>
      )}

      {/* Conditionally render desktop navigation */}
      {!isMobile && (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap="1rem"
          fontFamily="'Roboto', sans-serif"
          fontSize={{ xs: "1.2rem", sm: "1.5rem" }}
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
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#ffdede" }}
          >
            Exercises
          </a>
        </Stack>
      )}
    </Stack>
  );
};

export default Navbar;
