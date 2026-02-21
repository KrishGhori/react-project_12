import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  const btnRef = useRef();
  const colorIndex = useRef(0);

  const colors = [
    "#2563eb", // blue
    "#dc2626", // red
    "#16a34a", // green
    "#9333ea", // purple
    "#f59e0b", // orange
    "#0ea5e9"  // sky
  ];

  function handleIncrement() {
    renderCount.current += 1;
    setCount((prev) => prev + 1);
  }

  function handleColorChange() {
    colorIndex.current = (colorIndex.current + 1) % colors.length;
    btnRef.current.style.backgroundColor = colors[colorIndex.current];
    btnRef.current.style.color = "white";
  }

  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <div className="container">
      <div className="card">
        <h1>React Counter App</h1>

        <h2>{count}</h2>
        <p>Button Clicked: {renderCount.current} times</p>

        <button ref={btnRef} className="btn" onClick={handleIncrement}>
          Increment
        </button>

        <br /><br />

        <button className="btn outline" onClick={handleColorChange}>
          Change Color of Increment Button
        </button>
      </div>
    </div>
  );
}

export default App;