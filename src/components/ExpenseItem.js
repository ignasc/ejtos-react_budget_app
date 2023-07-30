import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <button
            style={ {
                backgroundColor:'lightGreen',
                color:'white',
                fontSize:'1em',
                borderRadius:'2rem',
            } }    
            onClick={event=> increaseAllocation(props.name)}><TiPlus/></button>
        </td>
        <td>
            <button
            style={ {
                backgroundColor:'darkRed',
                color:'white',
                fontSize:'1em',
                borderRadius:'2rem',
            } }    
            onClick={event=> decreaseAllocation(props.name)}
            ><TiMinus/></button>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
