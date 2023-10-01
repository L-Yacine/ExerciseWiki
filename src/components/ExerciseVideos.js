import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

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
      <Stack
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "25vw", xs: "0px" },
          justifyContent: "flex-start",
        }}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        {exerciseVideos?.slice(0, 4)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ width: "30vw", height: "30vh" }}
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
            <Box>
              <Typography
                sx={{ fontSize: { lg: "2.5rem", xs: "1.5rem" } }}
                fontWeight={600}
                color="#FFF8DC" // Secondary color
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="1.5rem" color="#8B4513">
                {" "}
                {/* Neutral color */}
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
