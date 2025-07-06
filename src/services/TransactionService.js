// src/services/TransactionService.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/transactions";

const TransactionService = {
  getAll: () => axios.get(BASE_URL),
  create: (transaction) => axios.post(BASE_URL, transaction),
  update: (id, transaction) => axios.put(`${BASE_URL}/${id}`, transaction),
  remove: (id) => axios.delete(`${BASE_URL}/${id}`),
  getByMonth: (year, month) => axios.get(`${BASE_URL}/month/${year}/${month}`),
  getByCategory: (category) => axios.get(`${BASE_URL}/category/${category}`)
};

export default TransactionService;
