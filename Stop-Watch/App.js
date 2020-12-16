import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  const [status, setStatus] = useState(0);
  const [interv, setInterv] = useState();
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });

  let { h, m, s, ms } = { ...time };

  const start = () => {
    setStatus(1);
    run();
    setInterv(setInterval(run, 10));
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    setStatus(0);
    clearInterval(interv);
    setTime({ h: 0, m: 0, s: 0, ms: 0 });
  };

  const resume = () => start();

  const run = () => {
    if (m === 60) {
      h++;
      m = 0;
    } else if (s === 60) {
      m++;
      s = 0;
    } else if (ms === 100) {
      s++;
      ms = 0;
    }
    ms++;
    return setTime({ h, m, s, ms });
  };
  console.log(time);

  return (
    <div className="app">
      <div className="app__clock">
        <h1>Stop Watch App</h1>
        <div className="app__stopwatch">
          <h2>{time.h} </h2> :<h2> {time.m} </h2> :<h2> {time.s} </h2> :
          <h2> {time.ms} </h2>
        </div>
        <div className="app__btns">
          {status == 0 ? (
            <Button
              className="app__btnStart"
              onClick={start}
              variant={"outlined"}
              color={"primary"}
            >
              Start
            </Button>
          ) : (
            <div className="app__btnsBtn">
              <Button
                className="app__btnReset"
                onClick={reset}
                variant={"contained"}
                color={"inherited"}
              >
                Reset
              </Button>
              <Button
                className={`${
                  status == 1 ? "app__btnStop" : status == 2 && "app__btnResume"
                }`}
                onClick={status == 1 ? stop : status == 2 && resume}
                variant={"contained"}
                color={"inherited"}
              >
                {status == 1 ? "stop" : status == 2 && "resume"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
