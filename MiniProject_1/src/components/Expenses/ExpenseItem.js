import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react'

const ExpenseItem = (obj) => {

    const [title, setTitle] = useState(obj.title);

    const clickHandler = () => {
        setTitle('Updated!')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={obj.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${obj.amount}</div>
            </div>
            <button onClick={clickHandler}>Ch Title</button>
        </Card>
    )
}

export default ExpenseItem