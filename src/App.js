import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm.js";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

   useEffect(() => {
     localStorage.setItem("expenses", JSON.stringify(expenses));
   }, [expenses]);
  

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

   const handleSidebarToggle = () => setSidebarOpen((open) => !open);

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <div>
      <Header onHamburgerClick={handleSidebarToggle} />
      <Sidebar onClose={() => setSidebarOpen(false)} open={sidebarOpen} />
      <main>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
        />
        <div className="total" style={{ marginTop: "2em", fontWeight: "bold" }}>
          Total Spent: ₹{total.toFixed(2)}
        </div>
      </main>
    </div>
  );
}

export default App;
