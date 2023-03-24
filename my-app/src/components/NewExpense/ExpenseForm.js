import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [currentTitle, setNewTitle] = useState("");
  const [currentAmount, setNewAmount] = useState("");
  const [currentDate, setNewDate] = useState("");

  function titleChangeHandler(event) {
    setNewTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setNewAmount(event.target.value);
  }

  function setNewDateHandler(event) {
    setNewDate(event.target.value);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={setNewDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
