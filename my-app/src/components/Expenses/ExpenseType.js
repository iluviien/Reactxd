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
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}
export default ExpenseType;
