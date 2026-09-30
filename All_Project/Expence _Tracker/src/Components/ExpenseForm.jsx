import { useState, useRef } from 'react'

const ExpenseForm = ({ onAddExpense }) => {

  const [Title, setTitle] = useState('')
  const [Amount, setAmount] = useState('')

  const titleRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!Title || !Amount) {
      return alert('Please fill all fields!')
    }

    const newExpense = {
      id: Date.now(),
      Title: Title,
      Amount: parseFloat(Amount)
    }

    onAddExpense(newExpense)

    setTitle('')
    setAmount('')

    titleRef.current.focus()
  }

  return (
    <form
      className='expense-form'
      onSubmit={handleSubmit}
    >

   <input
      type='text'
      placeholder='Expense Title'
      value={Title}
      onChange={(e) => setTitle(e.target.value)}
      ref={titleRef}
      />

      <input
        type='number'
        placeholder='Amount ₹'
        value={Amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type='submit'>
        Add Expense
      </button>

    </form>
  )
}

export default ExpenseForm