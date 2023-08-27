import { useState } from "react";
import "./App.css";

function App() {
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("");
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(false);

  function handleClick(e) {
    if (overwrite === true) {
      setCurrent(e.target.name);
      setOverwrite(false);
    } else {
      if (e.target.name === "." && current.includes(".")) {
        return;
      }
      if (e.target.name === "0" && previous === "") {
        return;
      }
      setCurrent(current.concat(e.target.name));
    }
  }
  function handleOperand(e) {
    if (current == "" && previous == "") {
      return;
    }
    if (operation) {
      setOperation(e.target.name);
    }
    if (current !== "" && previous == "") {
      setOperation(e.target.name);
      setPrevious(current);
      setCurrent("");
    }
    setPrevious(eval(previous + operation + current));
    setOperation(e.target.name);
    setCurrent("");
  }
  function handleDEL() {
    if (overwrite) {
      setCurrent("");
      setOverwrite(false);
    } else {
      setCurrent(current.slice(0, -1));
    }
  }

  const handleAC = () => {
    setPrevious("");
    setCurrent("");
    setOperation("");
  };
  function handleEqual() {
    try {
      if (current == "" || previous == "" || operation == "") {
        return;
      }
      const result = eval(previous + operation + current);
      setCurrent(result.toString());
      setPrevious("");
      setOperation("");
      setOverwrite(true);
    } catch (error) {
      setCurrent("Error");
    }
  }

  return (
    <div className="calculator">
      <div className="output">
        <div className="previous">
          {previous} {operation}
        </div>
        <div className="current">{current}</div>
      </div>
      <button className="span-two" onClick={handleAC}>
        AC
      </button>
      <button onClick={handleDEL}>DEL</button>
      <button onClick={handleOperand} name="/">
        ÷
      </button>
      <button onClick={handleClick} name="1">
        1
      </button>
      <button onClick={handleClick} name="2">
        2
      </button>
      <button onClick={handleClick} name="3">
        3
      </button>
      <button onClick={handleOperand} name="*">
        *
      </button>
      <button onClick={handleClick} name="4">
        4
      </button>
      <button onClick={handleClick} name="5">
        5
      </button>
      <button onClick={handleClick} name="6">
        6
      </button>
      <button onClick={handleOperand} name="+">
        +
      </button>
      <button onClick={handleClick} name="7">
        7
      </button>
      <button onClick={handleClick} name="8">
        8
      </button>
      <button onClick={handleClick} name="9">
        9
      </button>
      <button onClick={handleOperand} name="-">
        -
      </button>
      <button onClick={handleClick} name=".">
        .
      </button>
      <button name="0" onClick={handleClick}>
        0
      </button>
      <button className="span-two" onClick={handleEqual}>
        =
      </button>
    </div>
  );
}

export default App;
