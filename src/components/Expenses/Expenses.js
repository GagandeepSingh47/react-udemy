import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
const ExpenseData = ({ item, abc }) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {item.map((expense) =>(
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
        ))};
      </Card>
    </>
  );
}

export default ExpenseData;