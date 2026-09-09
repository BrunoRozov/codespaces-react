import ExpenseItem from './ExpenseItem'
import Card from './Card'
import './Expense.css'

const Expenses = (props) => {
	return (
		<Card className='expenses'>
			{props.items.map((expense) => (
				<ExpenseItem key={expense.title} data={expense} />
			))}
		</Card>
	)
}

export default Expenses
