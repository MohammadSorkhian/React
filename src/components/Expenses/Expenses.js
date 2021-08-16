import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'

const Expenses = (props) => {
    
    return(
        <Card className='expenses'>
            {props.items.map( expenseItem => (
            <ExpenseItem
                key={expenseItem.id}
                title={expenseItem.title}
                amount={expenseItem.amount}
                date={expenseItem.date}>
            </ExpenseItem>
    ))}
        </Card>
    )
}

export default Expenses;