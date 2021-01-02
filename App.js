import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Checkout from "./Checkout";
import Display from "./Display";
import Login from "./Login";
import { Context } from "./Context";
import "./App.css";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          {user ? <Display /> : <Login />}
        </Route>

        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// const firebaseConfig = {
//   apiKey: "AIzaSyAnFjPMISBhjHZQAMWdFoYdXdN35ju0rmQ",
//   authDomain: "clone-50eae.firebaseapp.com",
//   databaseURL: "https://clone-50eae.firebaseio.com",
//   projectId: "clone-50eae",
//   storageBucket: "clone-50eae.appspot.com",
//   messagingSenderId: "1007031097545",
//   appId: "1:1007031097545:web:a863dd0309ac3617461518",
//   measurementId: "G-41YQRPW3C1"
// };

// if(authUser) {
//   setUser("SET USER")
// } else {
// setUser("")
// }
