import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";
import { useExpenseContext } from "../ExpenseContext";
import "./Report.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Report = () => {
  const { expenses } = useExpenseContext();

  return (
    <div className="report-container">
      <h2>Monthly Expense Report</h2>

      {expenses.length === 0 ? (
        <p className="no-data">No data available. Add expenses from Home Page.</p>
      ) : (
        <div className="charts">
          <div className="chart-box">
            <h3>Spending Breakdown</h3>
            <PieChart width={300} height={300}>
              <Pie data={expenses} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {expenses.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </div>

          <div className="chart-box">
            <h3>Spending Trend</h3>
            <BarChart width={400} height={250} data={expenses}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#ffca28" />
            </BarChart>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
