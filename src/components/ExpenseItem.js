import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(obj) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={obj.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{obj.title}</h2>
                <div className='expense-item__price'>${obj.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem