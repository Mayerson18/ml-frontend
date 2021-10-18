import React from "react";
import { Link } from "react-router-dom";
import Price from "../components/Price";
import Thumbnail from "../components/Thumbnail";
import iconShipping from "../assets/img/ic_shipping.png";

const Item = (props: any) => {
  const { picture, title, price, id, free_shipping } = props.item;
  const pathIDetailItem = `/items/${id}`;
  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="mx-auto mx-md-3">
        <Link to={pathIDetailItem}>
          <Thumbnail picture={picture} title={title}/>
        </Link>
      </div>
      <div className="text-center text-md-left">
        <div className="mt-2 mb-3 mt-md-0 mb-md-4">
          <span className="h4 font-weight-normal relative">
            <Price amount={price.amount} decimals={price.decimals} />
            {free_shipping ? (<img src={iconShipping} alt="shipping" className="shipping"/>) : <></>}
          </span>
        </div>
        <Link to={pathIDetailItem} className="h5 font-weight-normal">
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Item;
