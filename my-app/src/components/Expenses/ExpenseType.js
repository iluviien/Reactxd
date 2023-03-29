import React, { useState } from "react";
import "./ExpenseType.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

function ExpenseType(props) {
  const [filterYear, setFilteredYear] = useState("2020");
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default ExpenseType;
