// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseChart from './ExpenseChart';
import ExpensesList from './ExpensesList';

const ExpenseData = ({ item, abc }) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  //filter expense acoding to year 
  const filteredHandler = item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
        />
        <ExpenseChart  expenses={filteredHandler}/>
        <ExpensesList items={filteredHandler}/>
      </Card>
    </>
  );
}

export default ExpenseData;