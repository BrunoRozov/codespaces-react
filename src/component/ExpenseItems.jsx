import './ExpenseItems.css'

const ExpenseItems = (props) => {
    
    const day = props.data.data.toLocaleString('en-US', { day: '2-digit' });
    const month = props.data.data.toLocaleString('en-US', { month: 'long' });
    const year = props.data.data.getFullYear();
    return (
        <div className='expense-item'>
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__year'>{year}</div>
            </div>
                <div className='expense-item__description'>
                    <h2>{props.data.title}</h2>
                    <div className='expense-item__price'>€{props.data.price.toFixed(2)}</div>
                </div>
        </div>
    )
    
}

export default ExpenseItems;
