import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap={{ xs: "2rem", lg: "6vh" }} // Adjusting gap for different screen sizes
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        p: "2vw",
        alignItems: "center",
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image"
        style={{
          width: "40vw",
          height: "40vw",
          maxWidth: "100%",
        }}
      />
      <Stack sx={{ gap: { lg: "3vh", xs: "2vh" } }}>
        <Typography
          sx={{ fontSize: { xs: "3rem", lg: "4rem" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "1.5rem", lg: "2rem" } }} // Adjust font size for different screen sizes
          color="#e6dccc"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="2vw" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "10vw",
                height: "10vw",
                minWidth: "60px", // Ensure a minimum size for the button
                minHeight: "60px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "5vw", height: "5vw", maxWidth: "100%" }} // Make sure image doesn't exceed button size
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { xs: "2rem", lg: "3rem" } }} // Adjust font size for different screen sizes
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
