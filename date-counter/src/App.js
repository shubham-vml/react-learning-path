import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((currentCount) => currentCount - 1)}>
          {" "}
          -{" "}
        </button>
        <span>Step :{step}</span>
        <button onClick={() => setStep((currentCount) => currentCount + 1)}>
          {" "}
          +{" "}
        </button>
      </div>
      <div>
        <button onClick={() => setCount((currentCount) => currentCount - step)}>
          {" "}
          -{" "}
        </button>
        <span>Count :{count}</span>
        <button onClick={() => setCount((currentCount) => currentCount + step)}>
          {" "}
          +{" "}
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is: "
            : count > 0
            ? `${count} days from today is `
            : `${count} day ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
