import { Button } from "reactstrap";
import React from "react";
import Price from "../components/Price";
import { CONDITIONS } from "../constants";
import { IItemPurchase } from "./interfaces/itemPurchase";

const ItemPurchase = ({ condition, sold_quantity, title, price }: IItemPurchase) => {
  return (
    <div className="d-flex flex-column">
      <small className="mb-3">
        {CONDITIONS[condition]}
        {" - "}
        {sold_quantity} vendidos
      </small>
      <span className="h4 font-weight-normal">{title}</span>
      <div className="my-4 h1 font-weight-normal">
        <Price {...price} />
      </div>
      <Button color="secondary" className="mr-4">
        Comprar
      </Button>
    </div>
  );
};

export default ItemPurchase;
