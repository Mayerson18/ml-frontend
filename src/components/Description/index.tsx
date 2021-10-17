import React from "react";
import { IDescription } from "./interfaces";

const Description = ({ description }: IDescription) => (
  <div className="description">
    <span className="h3 font-weight-normal mb-4">Descripción</span>
    <p className="text-muted">{description}</p>
  </div>
);

export default Description;
