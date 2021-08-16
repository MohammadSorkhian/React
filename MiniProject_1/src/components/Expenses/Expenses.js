import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import FilterByYear from '../Filter/Filter'

const Expenses = (props) => {

    const filterHandler = (event) => {
        props.filter(event)
    }

    return (
        <Card className='expenses'>

            <FilterByYear filter={filterHandler}></FilterByYear>

            {props.items.length === 0 &&
            <div style={{color:"white"}}> There is no Expenses </div>
            }

            {props.items.map(expenseItem => (
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