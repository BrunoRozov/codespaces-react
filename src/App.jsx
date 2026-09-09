import'./App.css';
import ExpenseItem from './component/Expenseitem';

const App = () => {
    return (
        <div className="App">
            <ExpenseItem />
            <ExpenseItem />
        </div>
    );
}

export default App;