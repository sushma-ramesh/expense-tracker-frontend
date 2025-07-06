// src/components/TransactionList.js
import React, { useEffect, useState } from "react";
import TransactionService from "../services/TransactionService";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  const fetchData = () => {
    TransactionService.getAll().then((res) => setTransactions(res.data));
  };

  const handleDelete = (id) => {
    TransactionService.remove(id).then(fetchData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>All Transactions</h3>
      <table className="table table-bordered table-hover shadow-sm">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td className={t.type === "expense" ? "text-danger" : "text-success"}>
                {t.amount}
              </td>
              <td>{t.type}</td>
              <td>{t.category}</td>
              <td>{t.date}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(t.id)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 
  );
}

export default TransactionList;
