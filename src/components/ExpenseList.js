import React from "react";

function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p>No expenses yet.</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <strong>{expense.description}</strong> — ₹{expense.amount} on{" "}
          {expense.date}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
