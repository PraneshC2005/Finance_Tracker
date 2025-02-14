import React, { useState } from "react";
import { useExpenseContext } from "../ExpenseContext";
import "./Home.css";

const Home = () => {
  const { addExpense } = useExpenseContext();
  const [expenseDetails, setExpenseDetails] = useState({ category: "", amount: "" });

  const handleChange = (e) => {
    setExpenseDetails({ ...expenseDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!expenseDetails.category || !expenseDetails.amount) return;
    addExpense({ category: expenseDetails.category, amount: Number(expenseDetails.amount) });
    setExpenseDetails({ category: "", amount: "" });
  };

  return (
    <div className="home-container">
      <h2>Track Your Expenses</h2>

      <div className="expense-form">
        <div className="input-group">
          <label>Category</label>
          <input type="text" name="category" value={expenseDetails.category} onChange={handleChange} placeholder="Enter category" />
        </div>
        <div className="input-group">
          <label>Amount</label>
          <input type="number" name="amount" value={expenseDetails.amount} onChange={handleChange} placeholder="Enter amount" />
        </div>
        <button className="add-button" onClick={handleSubmit}>Add Expense</button>
      </div>
    </div>
  );
};

export default Home;
