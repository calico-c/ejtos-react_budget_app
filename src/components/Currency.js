import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { budget,dispatch,expenses, remaining,currency } = useContext(AppContext);
    const [name, setName] = useState('');
    
    const changeCurrency = (val)=>{
        dispatch({
            type: 'SET_CURRENCY',
            payload: val,
        })
	}
	return (
        <div>
        <div className='row'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                    <option defaultValue>Choose...</option>
                    <option value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="rupee">₹ Ruppee</option>
                </select>
            </div>    
        </div>
        </div>
	);
};


export default Currency;