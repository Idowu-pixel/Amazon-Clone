import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Context } from "./Context";
import "./Header.css";
import { auth } from "./firebase";

function Header() {
  const { user, cartItem } = useContext(Context);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option">
            <span onClick={login} className="header__optionLineOne">
              {!user ? "Guest" : user?.email}
            </span>
            <span çlassName="header__optionLIneTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span çlassName="header__optionLIneTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span çlassName="header__optionLIneTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLIneTwo header__basketCount">
              {cartItem?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

{
  /* <Link to={!user && "/login"} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Idowu Enags</span>
            <span çlassName="header__optionLIneTwo" {user ? "Sign Out" : "Sign In"}>Sign In</span>
          </div>
        </Link> */
}

// <span çlassName="header__optionLIneTwo" {user ? "Sign Out" : "Sign In"}>Sign In</span>
