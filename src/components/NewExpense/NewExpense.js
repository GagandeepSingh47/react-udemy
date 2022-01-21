import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {

    const [isEdited, setIsEdited] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEdited(false);
    };
    const startEditingHandler = () => setIsEdited(true);
    const cancelEditingHandler = () => setIsEdited(false);
    return (
        <div className='new-expense'>
            {!isEdited && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEdited && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditingHandler}/>}
        </div>
    );
}

export default NewExpense;