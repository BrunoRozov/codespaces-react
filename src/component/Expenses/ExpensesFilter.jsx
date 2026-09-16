import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={dropdownChangeHandler}>
                    <option value='Year data in Expenses 2023'>2023</option>
                    <option value='Year data in Expenses 2024'>2024</option>
                    <option value='Year data in Expenses 2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;