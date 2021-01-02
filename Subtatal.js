import React, { useContext } from "react";
import { Context } from "./Context";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal() {
  const { cost, cartItem } = useContext(Context);
  console.log(cartItem);

  // const totalCost = Math.floor() * cartItem.length;
  // const totalCostDisplay = totalCost.toLocaleString("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // });

  return (
    <div className="subtotal">
      {/* <strong>{cost}</strong> */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cartItem.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={cost}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

// npm i react-currency-format
