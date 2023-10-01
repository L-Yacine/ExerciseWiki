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
        alignItems="center"
        justifyContent="space-between"
        width="70%"
        mx="auto"
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "5rem",
            textDecoration: "none",

            justifySelf: "start",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "5rem",
              height: "3rem",
              marginRight: "0.5rem",
              marginLeft: "1rem",
            }}
          />
          <Typography
            fontWeight="bold"
            variant="h4"
            style={{
              fontSize: "1.1rem",
              color: "#ffdede",
              marginTop: "0.5rem",
            }}
          >
            FIT-WIKI
          </Typography>
        </Link>
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
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
          >
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
      </Box>

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
