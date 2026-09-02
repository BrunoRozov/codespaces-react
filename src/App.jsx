import './App.css';
import Expentseitems from './component/Expentseitems';
function App  () {

    const expense = [
        {
            data: new Date(2026, 9, 2),
            title: 'New book',
            price: 30.99
        },
        {
            data: new Date(2026, 9, 2),
            title: 'New jeanse',
            price: 99.99
        }
    ]
 
        return (
            <div className="App">
                <Expentseitems data={expense[0]}/>
                <Expentseitems data={expense[1]}/>

            </div>
        );
}

    export default App;