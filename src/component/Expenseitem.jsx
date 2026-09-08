import './ExpenseItems.css'

const ExpenseItems = (props) => {
    
    
    return (
        <div className='expense-item'>
            <ExpenseData data={props.data.data}/>
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>€{props.data.price.toFixed(2)}</div>
            </div>
        </div>
    )
    
}

export default ExpenseItems;