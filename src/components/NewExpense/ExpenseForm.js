import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleOnchangeHandler = (event) => { setTitle(event.target.value) }
    const amountOnchangeHandler = (event) => { setAmount(event.target.value) }
    const dateOnchangeHandler = (event) => { setDate(event.target.value) }

    const onSubmitHadler = (event) => {
        event.preventDefault();
        const newExpense = {
            title: title,
            amount: amount,
            date: new Date(date),
        }

        props.onSaveExpenseData(newExpense);

        setAmount("");
        setTitle("");
        setDate("");

    }


    return (
        <form onSubmit={onSubmitHadler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={titleOnchangeHandler}
                        value={title}>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step="0.01"
                        onChange={amountOnchangeHandler}
                        value={amount}>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2024-01-01'
                        onChange={dateOnchangeHandler}
                        value={date}>
                    </input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;