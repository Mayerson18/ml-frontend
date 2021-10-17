import React from "react";
import { IPicture } from "./interfaces";

const Picture = ({ picture, title }: IPicture) => {
  return (
    <img
      className="picture"
      src={picture}
      alt={title}
      width="680"
      height="auto"
    />
  );
};

export default Picture;
