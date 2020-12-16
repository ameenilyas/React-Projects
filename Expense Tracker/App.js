import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import History from "./History";
import { useStateValue } from "./StateProvider";
import Transaction from "./Transaction";
import FlipMove from "react-flip-move";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Header />
      <h2 className="app__history">History</h2>
      <FlipMove>
        {basket.length ? (
          basket.map(({ item, amount, id }) => (
            <History key={id} id={id} amount={amount} item={item} />
          ))
        ) : (
          <h3 className="app__historyInfo">Your History Appears Here</h3>
        )}
      </FlipMove>
      <Transaction />
    </div>
  );
}

export default App;
