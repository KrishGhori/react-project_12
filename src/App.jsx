import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  const btnRef = useRef();

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
    btnRef.current.style.backgroundColor = "#2563eb";
    btnRef.current.style.color = "white";
  }

  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">React Counter App</h1>

        <div className="counter-box">
          <p className="count">{count}</p>
          <p className="render">Button Clicked: {renderCount.current} times</p>
        </div>

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
      </div>
    </div>
  );
}

export default App;