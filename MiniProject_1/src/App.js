import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react';

const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {

  const [expenses, setExpenses] = useState(initialExpenses);
  const [filteredExpensesByYear, setFilteredExpensesByYear] = useState(initialExpenses);
  const [yearOfFilter, setYearOfFilter] = useState("All")


  const saveExpenseDataHandler = (enteredExpenseData) => {

    setExpenses( (previousExpenses) => {
      return [enteredExpenseData, ...previousExpenses]
    });

    selectedFilterHandler(yearOfFilter);
  }


  const selectedFilterHandler = (event) => { 

    setYearOfFilter(event)
    console.log(event) 

    const templist = expenses.filter( ex => (
      ex.date.getFullYear().toString() === event.toString()
      ));
    setFilteredExpensesByYear(event === "All"? expenses : templist);
  }


  return (
    <div>
      <NewExpense
        onSaveExpenseData={saveExpenseDataHandler}>
      </NewExpense>
      <Expenses
        filter={selectedFilterHandler}
        items={filteredExpensesByYear}>
      </Expenses>
    </div>
  );
}


export default App;
