import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const appendValue = (value) => setInput((prev) => prev + value);
  const clearDisplay = () => setInput("");
  const deleteChar = () => setInput((prev) => prev.slice(0, -1));

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const scientificFunctions = [
    { label: "sin", func: "Math.sin(" },
    { label: "cos", func: "Math.cos(" },
    { label: "tan", func: "Math.tan(" },
    { label: "√", func: "Math.sqrt(" },
    { label: "π", func: "Math.PI" },
    { label: "log", func: "Math.log10(" },
    { label: "ln", func: "Math.log(" },
    { label: "^", func: "**" },
  ];

  return (
    <div className="calculator">
      <input
        type="text"
        value={input}
        readOnly
        className="display"
        placeholder="0"
      />

      <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={deleteChar}>⌫</button>
        <button onClick={() => appendValue("(")}>(</button>
        <button onClick={() => appendValue(")")}>)</button>

        {scientificFunctions.map((btn) => (
          <button key={btn.label} onClick={() => appendValue(btn.func)}>
            {btn.label}
          </button>
        ))}

        <button onClick={() => appendValue("7")}>7</button>
        <button onClick={() => appendValue("8")}>8</button>
        <button onClick={() => appendValue("9")}>9</button>
        <button onClick={() => appendValue("/")}>÷</button>

        <button onClick={() => appendValue("4")}>4</button>
        <button onClick={() => appendValue("5")}>5</button>
        <button onClick={() => appendValue("6")}>6</button>
        <button onClick={() => appendValue("*")}>×</button>

        <button onClick={() => appendValue("1")}>1</button>
        <button onClick={() => appendValue("2")}>2</button>
        <button onClick={() => appendValue("3")}>3</button>
        <button onClick={() => appendValue("-")}>−</button>

        <button onClick={() => appendValue("0")}>0</button>
        <button onClick={() => appendValue(".")}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => appendValue("+")}>+</button>
      </div>
    </div>
  );
}

export default App;
