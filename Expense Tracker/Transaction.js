import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import { TotalExpense } from "./reducer";
import "./Transaction.css";

function Transaction() {
  const [amount, setAmount] = useState();
  const [item, setItem] = useState();
  const [{ basket, income }, dispatch] = useStateValue();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "EXPENSE",
      item: {
        amount,
        item,
        id: new Date().getTime(),
      },
    });
    setItem("");
    setAmount("");
    console.log(basket, "basket");
    console.log(income, "income");
    console.log(TotalExpense(basket), "Total Expense");
  };
  console.log(amount);
  console.log(item);

  return (
    <div className="transaction">
      <h2>Add transaction</h2>
      <form className="transaction__form">
        <p>Text</p>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          placeholder="Add Naration"
          required
        />
        <p>Amount , [+tive income,-tive expense]</p>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Add Cost"
          required
        />
        <button disabled={!amount} type="submit" onClick={handleClick}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default Transaction;
