import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ShoppingBasketSharp } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import { IconButton } from "@material-ui/core";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <h1>
        Plan-<span>Z</span>
      </h1>
      <div className="header__nav">
        <Link to="/">
          <h3>Pick Some</h3>
        </Link>
        <Link to="/favorite">
          <h3>Favourite</h3>
        </Link>
        <Link to="/cart">
          <IconButton variant={"contained"} className="header__basket">
            <ShoppingBasketSharp />
            <span className="header__basketItems">{basket.length}</span>
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Header;
