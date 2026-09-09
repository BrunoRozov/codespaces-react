import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date.date}/>
      <div className='expense-item_description'>
        <h2>{props.date.title}</h2>
        <div className='expense-item_price'>{props.date.price}</div>
      </div>
    </div>
  )
}

export default ExpenseItem