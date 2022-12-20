import React from 'react'
import './ExpensensFilter.css'

const ExpensesFilter = ({selectedYear, onchangeSelectedYear}) => {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor="">Filter by year</label>
        <select value={selectedYear} onChange={onchangeSelectedYear}>
            <option value="All">Select All</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
