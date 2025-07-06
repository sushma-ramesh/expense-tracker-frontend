// src/App.js
import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  const [reload, setReload] = useState(false);

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">💰 Expense Tracker</h2>
          <p className="text-muted">Track your income and expenses smartly</p>
        </div>

        <div className="row g-4">
          <div className="col-md-5">
            <TransactionForm onAdd={() => setReload(!reload)} />
          </div>
          <div className="col-md-7">
            <TransactionList key={reload} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
