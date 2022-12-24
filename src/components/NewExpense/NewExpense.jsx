import React, { useState } from 'react';
import ExpenseForm from '../NewExpense/ExpenseForm';

import './NewExpense.css';

export default function NewExpense(props) {
  const [isShown, setIsShown] = useState(false);

  const changeIsShown = () => {
    setIsShown((prevIsShown) => {
      return !prevIsShown;
    });
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isShown && <button onClick={changeIsShown}>Add New Expense</button>}
      {isShown && (
        <ExpenseForm
          onExpenseDataEntered={saveExpenseDataHandler}
          changeIsShown={changeIsShown}
        />
      )}
    </div>
  );
}
