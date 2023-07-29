import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const alertType = 'alert-success';

    const { dispatch, currency } = useContext(AppContext);

    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value        })
    };

    return (
        <div className={`alert ${alertType}`}>
            <select
                id='currency'
                style={{ marginLeft: '1rem' , size: 10}}
                onChange={(e)=>(setCurrency(e.target.value))}
            >
                <option value='£'>£ Pound</option>
                <option value='$'>$ Dollar</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Rupee</option>
            
            </select>
        </div>
    );
};

export default Currency;
