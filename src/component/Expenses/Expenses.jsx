import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expense.css'

const Expenses = (props) => {
	const filterChangeHandler = (filteredYear) => {
		console.log('Year data in Expenses ' + filteredYear)
	}

	props.items.map((expense) => {
		console.log(expense)
	})

	return (
		<Card className='expenses'>
			<ExpensesFilter onChangeFilter={filterChangeHandler} />
			{
				props.items.map((expense) => {
					return <ExpenseItem key={expense.id} data={expense} />
				})
			}
		</Card>
	)
}

export default Expenses
