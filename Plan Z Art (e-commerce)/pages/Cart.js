import React from "react";
import "./Cart.css";
import { useStateValue } from "../StateProvider";
import FlipMove from "react-flip-move";
import Photo from "./Photo";
import { getBasketTotal } from "../reducer";
import { Button } from "@material-ui/core";

function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  const placeOrder = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
    console.log("Order Placed Successfully..");
  };
  return (
    <div className="cart">
      <section className="cart__details">
        <h1>
          Payment <span>Details</span>
        </h1>
        <div className="cart__detailsInfo">
          <h3>
            Total Items: <span>{basket.length}</span>
          </h3>
          <h3>
            Total Price: <span>{getBasketTotal(basket)}$</span>
          </h3>
        </div>
        <Button onClick={placeOrder} disabled={!basket.length}>
          {basket.length ? "Place Your Order" : "Put Items to place"}
        </Button>
      </section>
      <FlipMove>
        {basket.length > 0 ? (
          basket?.map((basket) => (
            <Photo
              key={basket?.id}
              id={basket?.id}
              img={basket?.img}
              isFavorite={basket?.isFavorite}
              ButtonHide
            />
          ))
        ) : (
          <h1>Your Basket Is Empty</h1>
        )}
      </FlipMove>
    </div>
  );
}

export default Cart;
