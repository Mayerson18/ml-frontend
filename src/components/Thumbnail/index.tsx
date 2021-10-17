import React from "react";
import { IThumbail } from "./interfaces";

const Thumbnail = ({ picture, title }: IThumbail) => {
  return (
    <img
      className="thumbnail"
      src={picture}
      alt={title}
      width="180"
      height="180"
    />
  );
};

export default Thumbnail;
