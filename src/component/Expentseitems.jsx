import './Expentseitems.css'

const Expentseitems = (props) => {
    
    console.log(props)
    console.log(props.data)
    return (
        <div className='expense-item'>
            <div>{props.data.data.toString()}</div>
            <div className='expense-item_description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item_price'>€{props.data.price.toFixed(2)}</div>
            </div>
        </div>
    )
    
}

export default Expentseitems;