import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack sx={{ mt: "1rem" }} direction="row">
      <Button
        sx={{
          ml: "1.3em",
          color: "#FFF8DC", // Secondary color
          background: "#363636", // Accent color
          fontSize: "1rem",
          borderRadius: "20px",
          textTransform: "capitalize",
          border: `1px solid #8B4513`, // Neutral color
          textShadow: "1px 1px 1px #8B4513", // Neutral color
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "1.3em",
          color: "#FFF8DC", // Secondary color
          background: "#363636", // Accent color
          fontSize: "0.875rem",
          borderRadius: "20px",
          textTransform: "capitalize",
          border: `1px solid #8B4513`, // Neutral color
          textShadow: "1px 1px 1px #8B4513", // Neutral color
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="1.3em"
      color="#363636" // Secondary color
      fontWeight="bold"
      sx={{ fontSize: { lg: "1.5rem", xs: "1.25rem" } }}
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
