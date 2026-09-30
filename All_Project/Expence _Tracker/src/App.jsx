import React, { useEffect, useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseList from './Components/ExpenseList'

const App = () => {

  const [expenses, setExpense] = useState(() => {
    const savedData = localStorage.getItem("expenses")

    try {
      return savedData ? JSON.parse(savedData) : []
    } catch (error) {
      console.error("Invalid data in localStorage:", error)
      localStorage.removeItem("expenses")
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  const AddExpense = (expense) => {
    setExpense((prev) => [...prev, expense])
  }

  const DeleteExpense = (id) => {
    setExpense((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  const totalExpenses = expenses.reduce(
    (total, item) => total + Number(item.Amount),
    0
  )

  return (
    <div className='app-container'>

      <h1>💰 Expense Tracker</h1>

       <ExpenseForm onAddExpense={AddExpense} /> 
      <h3 className='Total'>Total Expenses: ₹{totalExpenses.toFixed(2)}</h3>

      <ExpenseList
        expenses={expenses}onDelete={DeleteExpense}/>

    </div>
  )
}

export default App