import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        
        const newExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
            // console.log(newExpenseData);
            // console.log("Success")

            props.onSaveExpenseData(newExpenseData)
        }

    

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}>
            </ExpenseForm>
        </div>
    )
};

export default NewExpense;