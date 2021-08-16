import './ExpenseDate.css'
import Card from '../UI/Card'

const ExpenseDate = (obj) => {

    const month = obj.date.toLocaleString('en-US', { month: 'long' })
    const year = obj.date.toLocaleString('en-US', { year: 'numeric' })
    const day = obj.date.toLocaleString('en-US', { day: '2-digit' })

    return (
        <Card className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </Card>
    )
}

export default ExpenseDate;