import React from "react";
import { Box } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <div className="horizontal-scroll-container">
    {data.map((item) => (
      <div key={item.id || item} className="scroll-content">
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </div>
    ))}
  </div>
);

export default HorizontalScrollbar;
