import React from "react";
import Address from "./Address";
import CartMenu from "./CartMenu";
import OrderSummary from "./OrderSummary";

const Payment = ({ cart }) => {
  
  return (
    <div>
      <Address cart={cart} />
    </div>
  );
};

export default Payment;
