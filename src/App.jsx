import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    const trimmed = number.trim();

    // Empty or not a number
    if (trimmed === "" || isNaN(Number(trimmed))) {
      setResult("Not a valid number!");
      return;
    }

    const num = Number(trimmed);

    if (num % 2 === 0) {
      setResult(`The number ${trimmed} is even!`);
    } else {
      setResult(`Oops, ${trimmed} is odd!`);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Even or Odd Checker</h1>
        <p className="subtitle">Enter a number</p>

        <div className="row">
          <input
            type="text"
            name="number"
            placeholder="Enter a number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="button" onClick={handleCheck}>
            Check
          </button>
        </div>

        {result && <p className="result">{result}</p>}
      </div>
    </div>
  );
}

export default App;