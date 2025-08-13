import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm.js";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <div>
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <main>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
        />
        <div style={{ marginTop: "2em", fontWeight: "bold" }}>
          Total Spent: ₹{total.toFixed(2)}
        </div>
      </main>
    </div>
  );
}

export default App;
