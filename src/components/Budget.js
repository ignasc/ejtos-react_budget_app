import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    const { dispatch, budget } = useContext(AppContext);

    const setBudget = (value) => {
        const newBudgetValue = parseInt(value)
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
