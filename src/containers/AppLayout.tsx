import React from "react";
import Header from "./Header";

const AppLayout = (props: any) => (
  <>
    <Header />
    {props.children}
  </>
);

export default AppLayout;
