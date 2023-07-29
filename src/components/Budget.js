import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const { dispatch, budget, remaining } = useContext(AppContext);

    const setBudget = (value) => {
        let newBudgetValue = parseInt(value)

        //Check if entered value is a number
        if(isNaN(parseInt(value))){
            alert("Please enter a valid number.");
            newBudgetValue = budget;
        };

        //Set upper limit to 20000 when entering manually
        if(parseInt(value) > 20000){
            newBudgetValue = 20000;
        };

        //Check if budget is not being reduced below current spending
        if(parseInt(value) < (budget - remaining)){
            alert("Budget cannot be lower than current expenses £" + (budget - remaining));
            newBudgetValue = budget - remaining;
        };

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudgetValue
        })

    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type='number'
                id='budget'
                value={budget}
                step='10'
                max='20000'
                style={{ marginLeft: '1rem' , size: 10}}
                onChange={(event) => {
                    setBudget(event.target.value)
                }}
            >
            
            </input>
        </div>
    );
};

export default Budget;
