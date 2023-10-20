import React from "react";
import { Typography, Box, Grid } from "@mui/material"; // Import Grid component
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos) return <Loader />; // Handle null or undefined prop

  return (
    <Box sx={{ marginTop: { lg: "20vh", xs: "5vh" } }} p="2vw">
      <Typography
        sx={{ fontSize: { lg: "4rem", xs: "2.5rem" } }}
        fontWeight={700}
        color="#FFF8DC" // Secondary color
        mb="3vh"
      >
        Watch{" "}
        <span style={{ color: "#FF4500", textTransform: "capitalize" }}>
          {" "}
          {/* Highlight color */}
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Grid container spacing={2}>
        {" "}
        {/* Use Grid container to  */}
        {exerciseVideos?.slice(0, 4)?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  borderTopLeftRadius: "2vw",
                  width: "100%",
                  height: "auto",
                }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />
              <Box paddingX={1} style={{ height: "max-content" }}>
                <Typography
                  sx={{ fontSize: { lg: "1.7vw", xs: "4vw" } }}
                  fontWeight={600}
                  color="#FFF8DC"
                  className="video-title" // Add a class here
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="1rem" color="#8B4513">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseVideos;
