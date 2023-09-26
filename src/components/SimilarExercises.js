import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "12vh", xs: "0" } }}>
    <Typography
      sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: 2 }}
      fontWeight={700}
      color="#fff"
      mb={4}
    >
      Similar{" "}
      <span style={{ color: "#FF6347", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
        ml: 2,
        mt: { lg: "12vh", xs: "7vh" },
      }}
      fontWeight={700}
      color="#fff"
      mb={4}
    >
      Similar{" "}
      <span style={{ color: "#FF6347", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
