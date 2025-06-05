import { use, useEffect, useState } from "react";
import "./App.css";

/* 

https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}

*/

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        console.log(data);
        setConverted(data.rates[toCur]);
        setIsLoading(false);
      }
      if (toCur === fromCur) {
        return setConverted(amount);
      }
      convert();
    },
    [amount, fromCur, toCur]
  );
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => Number(setAmount(e.target.value))}
        disabled={isLoading}
      ></input>
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
      >
        <option className="USD">USD</option>
        <option className="EUR">EUR</option>
        <option className="CAD">CAD</option>
        <option className="INR">INR</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
      >
        <option className="USD">USD</option>
        <option className="EUR">EUR</option>
        <option className="CAD">CAD</option>
        <option className="INR">INR</option>
      </select>
      <p>
        {converted}
        {toCur}
      </p>
    </div>
  );
}

export default App;
