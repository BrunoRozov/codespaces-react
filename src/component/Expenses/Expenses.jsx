import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expense.css'

const Expenses = (props) => {
	const filterChangeHandler = (selectedYear) => {
		console.log(selectedYear)
	}

	return (
		<Card className='expenses'>
			<ExpensesFilter onChangeFilter={filterChangeHandler} />
			{props.items.map((expense) => (
				<ExpenseItem key={expense.title} data={expense} />
			))}
		</Card>
	)
}

export default Expenses
