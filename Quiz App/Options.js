import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./Options.css";

let score = 0;
let index = 0;
function Options({ data, done }) {
  const [next, setNext] = useState(false);
  const { category, question, correct_answer, incorrect_answers } = data[index];

  const num = Math.floor(Math.random() * (incorrect_answers.length + 1));
  incorrect_answers.splice(num, 0, correct_answer);
  let unique = [...new Set(incorrect_answers)];
  console.log(unique, num);

  const handleClick = (option) => {
    if (option === correct_answer) score++;
    console.log(option);
    return setNext(true);
  };
  const handleNext = (e) => {
    index++;
    if (index >= data.length) {
      index = 0;
      score = 0;
      done();
    }
    setNext(false);
  };
  const classAdd = (option) => {
    if (correct_answer !== option) return "options__optionWrong";
  };

  return (
    <div className="options">
      <div className="options__questions">
        <div className="options__info">
          <h3>Total questions {data.length}</h3>
          <h3 style={{ fontSize: "24px", textDecoration: "underline" }}>
            Your Score {score}
          </h3>
          <h3>Question no: {index + 1}</h3>
        </div>
        <div className="options__question">
          <h2>{category}</h2>
          <h3>{question}</h3>
        </div>

        <div className="options__option">
          {unique.map((option) => (
            <Button
              onClick={() => handleClick(option)}
              className={`${next && classAdd(option)} ${
                next && option === correct_answer && "options__optionCorrect"
              } options__optionBtn`}
            >
              {option}
            </Button>
          ))}
          {next && (
            <Button
              onClick={handleNext}
              className="options__next"
              variant={"contained"}
              color={"inherit"}
            >
              {index == data.length - 1 ? "End" : "Next"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Options;
