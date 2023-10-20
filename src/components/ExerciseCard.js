import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link
    className="exercise-card"
    to={`/exercise/${exercise.id}`}
    style={{ height: "fit-content", width: "max-content" }}
  >
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack sx={{ mt: "1rem", paddingLeft: "0.4rem" }} direction="row">
      <Button
        sx={{
          padding: "0.2rem",
          color: "#FFF8DC", // Secondary color
          background: "#363636", // Accent color
          borderRadius: "10px",
          textTransform: "capitalize",
          border: `1px solid #8B4513`, // Neutral color
          textShadow: "1px 1px 1px #8B4513", // Neutral color
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          padding: "0.2rem",
          ml: "0.5em",
          color: "#FFF8DC", // Secondary color
          background: "#363636", // Accent color
          borderRadius: "10px",
          textTransform: "capitalize",
          border: `1px solid #8B4513`, // Neutral color
          textShadow: "1px 1px 1px #8B4513", // Neutral color
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      className="video-title"
      ml="1.3em"
      color="#363636" // Secondary color
      fontWeight="bold"
      sx={{ fontSize: { lg: "1.25rem", xs: "1rem" } }}
      mt="0.6875em"
      pb="0.625em"
      textTransform="capitalize"
    >
      {exercise.name}
      <br />
      <Typography sx={{ fontSize: { lg: "1rem", xs: "0.75rem" } }}>
        See details...
      </Typography>
    </Typography>
  </Link>
);

export default ExerciseCard;
