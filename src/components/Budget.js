import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const { dispatch, budget } = useContext(AppContext);

    const setBudget = (value) => {
        let newBudgetValue = parseInt(value)
        //Check if value exceeds 20k and change it accordingly
        if(value > 20000){
            newBudgetValue = 20000;
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
