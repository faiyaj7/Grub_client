import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({ title, desc = "This is a food delivery app" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
};

export default Title;
