import React, { useState } from "react";
import "./Photos.css";
import Photo from "./Photo";
import { useStateValue } from "../StateProvider";
import FlipMove from "react-flip-move";

function Photos() {
  const [{ images }, dispatch] = useStateValue();

  return (
    <div className="photos">
      <FlipMove>
        {images?.map((image) => (
          <Photo
            key={image?.id}
            id={image?.id}
            img={image?.url}
            isFavorite={image?.isFavorite}
          />
        ))}
      </FlipMove>
      <Photo />
    </div>
  );
}

export default Photos;
