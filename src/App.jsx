import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  const btnRef = useRef();
  const colorIndex = useRef(0);

  const colors = [
    "#2563eb",
    "#dc2626",
    "#16a34a",
    "#9333ea",
    "#f59e0b",
    "#0ea5e9"
  ];

  function handleIncrement() {
    renderCount.current += 1;
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleColorChange() {
    colorIndex.current = (colorIndex.current + 1) % colors.length;
    btnRef.current.style.backgroundColor = colors[colorIndex.current];
  }

  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Counter App</h1>

        <div className="count">{count}</div>

        <div className="button-group">
          <button ref={btnRef} className="btn primary" onClick={handleIncrement}>
            Increment
          </button>

          <button className="btn danger" onClick={handleDecrement}>
            Decrement
          </button>

          <button className="btn secondary" onClick={handleReset}>
            Reset
          </button>
        </div>

        <button className="btn outline" onClick={handleColorChange}>
          Change Increment Button Color
        </button>

        <p className="render">
          Increment clicked: {renderCount.current} times
        </p>
      </div>
    </div>
  );
}

export default App;