import React, { useEffect } from "react";
import "./Header.css";
import { TotalExpense, expense, income } from "./reducer";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ income: initial, basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <h1>Expense Tracker</h1>
      <h3>Your Balance </h3>
      <h2> ${initial + TotalExpense(basket)}</h2>
      <div className="header__current">
        <div className="header__currentIncome">
          <h3>Income </h3>
          <p>{initial + income}</p>
        </div>
        <span></span>
        <div className="header__currentExpense">
          <h3>Expenses </h3>
          <p>{expense}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
