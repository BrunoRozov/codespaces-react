import './Expenseitem.css'

const ExpenseItem = (props) => {
  
  console.log(props)
  console.log(props.data)

  return(
    <div className="expense-item">
        <div>{props.data.data.toString()}</div>
        <div className="expense-item__description">
            <h2>{props.data.title}</h2>
            <p className="expense-item__price">{props.data.price}</p>
        </div>
    </div>
  )
}

export default ExpenseItem