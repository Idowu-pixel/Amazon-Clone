import React, { useState, useEffect } from "react";
import { auth } from "./firebase";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [user, setUser] = useState(null);

  const [cartItem, setCartItem] = useState([]);
  //console.log(cartItem);

  const addToBasket = (newItem) => {
    setCartItem((prevItem) => [...prevItem, newItem]);
  };

  const removeBasket = (id) => {
    setCartItem((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  const cost = cartItem.reduce((sum, item) => sum + item.price, 0);
  console.log(cost);

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubcribe();
    };
  }, []);

  return (
    <Context.Provider
      value={{
        addToBasket,
        basket,
        removeBasket,
        cartItem,
        cost,
        user,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

// console.log("USER IS >>>", user)

// auth.createUserWithEmailAndPassword(email, password);
//     .then((auth) => {
//       // create a user and logged in, redirect to login page
//       history.push('/')
//     })
//     .catch((e) => alert(e.message))

// import { useHistory } from "react-router-dom";

/*const history = useHistory();*/

// {
//   id: 12321346,
//   title: "How Constant Innovation creates Radically Successful Paperback",
//   price: 10.96,
//   rating: 5,
//   image: require("./image/caroline.jpg"),
// },
// {
//   id: 72321349,
//   title:
//     "The lean Startup: How Constant Innovation creates Radically Successful Business Paperback",
//   price: 11.96,
//   rating: 6,
//   image: require("./image/dan.jpg"),
// },
// {
//   id: 123543412,
//   title:
//     "This car is arguably the fastest car on the planet with Innovation creates Radically Paperback",
//   price: 20.96,
//   rating: 5,
//   image: require("./image/eric.jpg"),
// },
// {
//   id: 19321343,
//   title:
//     "The lean Startup: How Constant Innovation creates Radically Successful Business Paperback",
//   price: 43.22,
//   rating: 4,
//   image: require("./image/rahul.jpg"),
// },
// {
//   id: 12821344,
//   title:
//     "The lean Startup: How Constant Innovation creates Radically Successful Business Paperback",
//   price: 11.96,
//   rating: 3,
//   image: require("./image/tatiana.jpg"),
// },
// {
//   id: 42321345,
//   title:
//     "The lean Startup: How Constant Innovation creates Radically Successful Business Paperback",
//   price: 6.96,
//   rating: 5,
//   image: require("./image/whatsup.jpg"),
// },
