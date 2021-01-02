import React, { useContext } from "react";
import { Context } from "./Context";
import "./CheckoutProduct.css";

function CheckoutProduct({ items }) {
  const { removeBasket } = useContext(Context);

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={items.image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{items.title}</p>
        <p>
          <small>$</small>
          <strong>{items.price}</strong>
        </p>
        <div className="product__rating">
          {Array(items.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={() => removeBasket(items.id)}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

// function CheckoutProduct({ props }) {
//   const { removeBasket } = useContext(Context);

//   return (
//     <div className="checkoutProduct" ref={ref}>
//       <img className="checkoutProduct__img" src={props.image} alt="" />
//       <div className="checkoutProduct__info">
//         <p className="checkoutProduct__title">{props.title}</p>
//         <p>
//           <small>$</small>
//           <strong>{props.price}</strong>
//         </p>
//         <div className="product__rating">
//           {Array(props.rating)
//             .fill()
//             .map((_, i) => (
//               <p>⭐</p>
//             ))}
//         </div>
//         <button onClick={() => removeBasket(props.id)}>
//           Remove from basket
//         </button>
//       </div>
//     </div>
//   );
// }
