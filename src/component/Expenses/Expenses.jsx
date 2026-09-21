import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expense.css'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2024')

	const filterChangeHandler = (filteredYear) => {
		setFilteredYear(filteredYear)
		console.log('Year data in Expenses ' + filteredYear)
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	let expensesContent = <p>No expenses found.</p>

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => {
			return <ExpenseItem data={expense} key={expense.id} />
		})
	}

	return (
		<Card className='expenses'>
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			{expensesContent}
		</Card>
	)
}

export default Expenses
