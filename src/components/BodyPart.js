import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "100%", // Use 100% width for responsiveness
            height: "auto", // Allow height to adjust based on content
            cursor: "pointer",
            gap: "2rem", // Use MUI spacing unit for gap
            padding: "1rem", // Add padding for spacing
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "100%", // Use 100% width for responsiveness
            height: "auto", // Allow height to adjust based on content
            cursor: "pointer",
            gap: "2rem", // Use MUI spacing unit for gap
            padding: "1rem", // Add padding for spacing
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img
      src={Icon}
      alt="dumbbell"
      style={{
        width: "40px",
        height: "40px",
        maxWidth: "100%", // Make sure the image doesn't exceed its container
        height: "auto", // Allow the image to adjust its height
      }}
    />
    <Typography
      fontSize="1.5rem" // Use relative font size units like "rem" for responsiveness
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
