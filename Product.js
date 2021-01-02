import React, { useContext } from "react";
import { Context } from "./Context";
import "./Product.css";

function Product(props) {
  const { addToBasket } = useContext(Context);

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="" />
      <button onClick={() => addToBasket(props)}>Add to basket</button>
    </div>
  );
}

export default Product;
//onClick={addToBasket
