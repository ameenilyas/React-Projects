import React, { forwardRef } from "react";
import "./History.css";
import { TotalExpense } from "./reducer";
import { useStateValue } from "./StateProvider";

const History = forwardRef(({ item, amount, id }, ref) => {
  const [{ basket }, dispatch] = useStateValue();

  const HandleClick = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
    TotalExpense(basket);
  };
  return (
    <div ref={ref} className="history">
      <div className={amount >= 0 ? "history__info" : "history__infos"}>
        <span onClick={HandleClick} className="remove">
          X
        </span>
        <p>{item}</p>
        <span>{amount}</span>
      </div>
    </div>
  );
});
export default History;
