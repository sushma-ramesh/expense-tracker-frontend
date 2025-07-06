// src/components/TransactionForm.js
import React, { useState } from "react";
import TransactionService from "../services/TransactionService";

function TransactionForm({ onAdd }) {
  const [transaction, setTransaction] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: ""
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    TransactionService.create(transaction).then((res) => {
      onAdd();
      setTransaction({ title: "", amount: "", type: "expense", category: "", date: "" });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 shadow-sm mb-4">
  <h5 className="mb-3">Add Transaction</h5>

  <input type="text" className="form-control mb-2" name="title" placeholder="Title" value={transaction.title} onChange={handleChange} required />

  <input type="number" className="form-control mb-2" name="amount" placeholder="Amount" value={transaction.amount} onChange={handleChange} required />

  <select name="type" className="form-select mb-2" value={transaction.type} onChange={handleChange}>
    <option value="expense">Expense</option>
    <option value="income">Income</option>
  </select>

  <input type="text" className="form-control mb-2" name="category" placeholder="Category" value={transaction.category} onChange={handleChange} required />

  <input type="date" className="form-control mb-3" name="date" value={transaction.date} onChange={handleChange} required />

  <button className="btn btn-primary w-100">Add</button>
</form>
  );
  }
export default TransactionForm;
