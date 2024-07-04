import React from "react";
import Address from "./Address";
import CartMenu from "./CartMenu";
import OrderSummary from "./OrderSummary";

const Payment = ({ cart }) => {
  return <Address cart={cart} isPayment={true} />;
};

export default Payment;
