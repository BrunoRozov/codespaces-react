import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expense.css'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2024')

	const filterChangeHandler = (filteredYear) => {
		setFilteredYear(filteredYear)
		console.log('Year data in Expenses ' + filteredYear)
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<Card className='expenses'>
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpensesList expenses={filteredExpenses}/>
		</Card>
	)
}

export default Expenses
