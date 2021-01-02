import React, { useContext } from "react";
import { Context } from "./Context";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtatal";
import FlipMove from "react-flip-move";
import "./Checkout.css";

function Checkout() {
  const { cartItem, user } = useContext(Context);

  const newBasket = cartItem.map((items) => (
    <CheckoutProduct key={items.id} items={items} />
  ));

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={require("./image/bryan.jpg")}
          alt=""
        />

        {cartItem?.length === 0 ? (
          <div className="checkout__info">
            <h2>Your Shopping Basket is Empty</h2>{" "}
            <p>
              You have no item in your basket, to buy one or more items click
              the "Add to basket" button next to the item
            </p>
          </div>
        ) : (
          <div className="checkout__detail">
            <h3>Hello {user?.email}</h3>
            <h2 className="checkout__title"> Your Shopping Basket</h2>
            <div className="checkout__checkout">{newBasket}</div>
          </div>
        )}
      </div>
      {cartItem.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

//http://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg
//       title={item.title}
//       rating={item.rating}
//       price={item.price}
//       image={item.image}

// const TopArticle = ({ cartItem }) => (
//   <FlipMove>
//     {cartItem.map((items) => (
//       <CheckoutProduct key={items.id} {...items} />
//     ))}
//   </FlipMove>
// );
