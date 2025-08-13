import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm.js";

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };
  return (
    <div>
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <main>
        <ExpenseForm onAddExpense={handleAddExpense} />
      </main>
    </div>
  );
}

export default App;
