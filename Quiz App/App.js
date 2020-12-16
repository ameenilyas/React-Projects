import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import Options from "./Options";
import data from "./data";

function App() {
  const [val, setVal] = useState(false);

  // console.log(data);
  const done = () => {
    return setVal(false);
  };
  return (
    <div className="app">
      <h1>Quiz App</h1>
      {!val ? (
        <Button
          // className={val && "app__hidden"}
          onClick={() => setVal(true)}
          variant={"contained"}
          color={"secondary"}
        >
          Start
        </Button>
      ) : (
        <Options done={done} data={data} />
      )}
    </div>
  );
}

export default App;
