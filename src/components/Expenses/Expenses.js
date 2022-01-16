import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
const ExpenseData = ({ item, abc }) => {
 const [filteredYear, setFilteredYear] =  useState('2020');
  const filterChangeHandler = selectedYear => {
   setFilteredYear(selectedYear);
  }
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem title={item[0].title} amount={item[0].amount} date={item[0].date} />
        <ExpenseItem title={item[1].title} amount={item[1].amount} date={item[1].date} />
        <ExpenseItem title={item[2].title} amount={item[2].amount} date={item[2].date} />
        <ExpenseItem title={item[3].title} amount={item[3].amount} date={item[3].date} />
      </Card>
    </>
  );
}

export default ExpenseData;