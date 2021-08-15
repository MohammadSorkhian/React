import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData)
  }

  
  return (
    <div>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}></NewExpense>
      <Expenses></Expenses>
    </div>
  );
}


export default App;
