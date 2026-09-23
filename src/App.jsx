import { useState } from 'react';
import'./App.css';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

const DYMMY_EXPENSES = [
    {
        id: 'id1',
        date: new Date(2023, 10, 12),
        title: 'New book',
        price: 30.99
    },
    {
        id: 'id2',
        date: new Date(2024, 11, 19),
        title: 'New jeans',
        price: 99.99
    },
    {
        id: 'id3',
        date: new Date(2025, 1, 25),
        title: 'New bag',
        price: 139.99
    },
    {
        id: 'id4',
        date: new Date(2023, 4, 2),
        title: 'Jorden 4',
        price: 125.99
    },
]

const App = () => {
    const [expenses, setExpenses] = useState(DYMMY_EXPENSES)
    

    const addExpenseHandler = (expense) => {
        setExpenses((previosExpenses) => {
            return [expense, ...previosExpenses]
        })
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;