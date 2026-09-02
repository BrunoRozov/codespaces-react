import './ExpenseItems.css'

const ExpenseItems = (props) => {
    
    const day = props.data.data.toLocaleString('en-US', { day: '2-digit' });
    const month = props.data.data.toLocaleString('en-US', { month: 'long' });
    const year = props.data.data.getFullYear();
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
                <div className='expense-item_description'>
                    <h2>{props.data.title}</h2>
                    <div className='expense-item_price'>€{props.data.price.toFixed(2)}</div>
                </div>
        </div>
    )
    
}

export default ExpenseItems;