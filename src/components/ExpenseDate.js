import './ExpenseDate.css'

function ExpenseDate(obj) {

    const month = obj.date.toLocaleString('en-US', { month: 'long' })
    const year = obj.date.toLocaleString('en-US', { year: 'numeric' })
    const day = obj.date.toLocaleString('en-US', { day: '2-digit' })

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;