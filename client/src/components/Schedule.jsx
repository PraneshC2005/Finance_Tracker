import React, { useState } from "react";
import "./Schedule.css";

const Schedule = () => {
  const [emiList, setEmiList] = useState([]);
  const [emiDetails, setEmiDetails] = useState({
    title: "",
    amount: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setEmiDetails({ ...emiDetails, [e.target.name]: e.target.value });
  };

  const addEmi = () => {
    if (!emiDetails.title || !emiDetails.amount || !emiDetails.startDate || !emiDetails.endDate) return;
    setEmiList([...emiList, emiDetails]);
    setEmiDetails({ title: "", amount: "", startDate: "", endDate: "" });
  };

  return (
    <div className="schedule-container">
      <h2>EMI Schedule</h2>
      <div className="emi-form">
        <div className="input-group">
          <label>Expense Title</label>
          <input type="text" name="title" value={emiDetails.title} onChange={handleChange} placeholder="Enter EMI Name" />
        </div>
        <div className="input-group">
          <label>Amount</label>
          <input type="number" name="amount" value={emiDetails.amount} onChange={handleChange} placeholder="Enter EMI Amount" />
        </div>
        <div className="input-group">
          <label>Start Date</label>
          <input type="date" name="startDate" value={emiDetails.startDate} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>End Date</label>
          <input type="date" name="endDate" value={emiDetails.endDate} onChange={handleChange} />
        </div>
        <button className="add-button" onClick={addEmi}>Add EMI</button>
      </div>

      <h3>Scheduled EMIs</h3>
      {emiList.length === 0 ? <p className="no-data">No EMI scheduled</p> :
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {emiList.map((emi, index) => (
              <tr key={index}>
                <td>{emi.title}</td>
                <td>₹{emi.amount}</td>
                <td>{emi.startDate}</td>
                <td>{emi.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default Schedule;
