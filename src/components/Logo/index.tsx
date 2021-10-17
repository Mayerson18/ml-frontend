import React from 'react';
import { Link } from 'react-router-dom';
import logoSmall from "../../assets/img/Logo_ML.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoSmall} alt="logo" width="auto" height="auto" />
    </Link>
  );
}

export default Logo;