import './Expenseitem.css'

const ExpenseItem = () => {
  return(
    <div className="expense-item">
        <div>Data</div>
        <div className="expense-item__description">
            <h2>Title</h2>
            <p className="expense-item__price">Price</p>
        </div>
    </div>
  )
}

export default ExpenseItem