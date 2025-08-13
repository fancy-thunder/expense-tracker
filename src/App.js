import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm.js";
import ExpenseList from "./components/ExpenseList";

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
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
}

export default App;
