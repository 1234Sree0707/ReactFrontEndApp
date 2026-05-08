import React, { useState } from "react";
import "./App.css";
import QuantityForm from "./components/QuantityForm";
import ResultCard from "./components/ResultCard";
import HistoryPanel from "./components/HistoryPanel";

function App() {

  const [result, setResult] = useState(null);

  return (
    <div className="container">

      <h1>Quantity Measurement System</h1>

      <QuantityForm setResult={setResult} />

      <br />

      <ResultCard result={result} />

      <br />
       <HistoryPanel />

    </div>
  );
}

export default App;
