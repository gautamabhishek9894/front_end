import React from 'react'

const ExpenseItem = ({ item, onDelete }) => {
  return (
    <div className='expense-item'>
      <span>{item.Title}</span>

      <span>₹{item.Amount.toFixed(2)}</span>

      <button onClick={() => onDelete(item.id)}>
        ❌
      </button>
    </div>
  )
}

export default ExpenseItem