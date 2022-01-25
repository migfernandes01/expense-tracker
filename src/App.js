import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'         //import component
import NewExpense from './components/NewExpense/NewExpense';  //import component

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2024, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler}/>    {/* component with form to add new expense*/}
        <Expenses items={expenses}/>  {/*components with expense items*/}
      </header>
    </div>
  );
}

export default App;
