import React from "react";
import { IPrice } from "./interfaces";

const Price = ({ amount, decimals }: IPrice) => {
  return (
    <>
      $ {new Intl.NumberFormat().format(amount)}
      {decimals ? <sup>{`${decimals.toFixed(2)}`.split(".")[1]}</sup> : null}
    </>
  );
};

export default Price;
