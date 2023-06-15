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

    const customStyles = {
        option: ( { data, isDisabled, isFocused, isSelected }) => {
        return {
          backgroundColor: "#white"
        };
      }
    };
    
    return (
        <div className='alert alert-secondary'>  
        <span>
          <select 
            className='btn btn-success dropdown-toggle'
            id='currency'
            style={{ marginLeft: '1rem' , backgroundColor:'#a5e2a0', color:'white', border: '#a5e2a0'}}
            onChange={(event) =>changeCurrency(event)}>Currency ({currency})
              <option style={{color:'black'}} defaultValue={currency}>Currency ({currency} Pound)</option>
              <option style={{color:'black'}} value='£'>£ Pound</option>
              <option style={{color:'black'}} value='$'>$ Dollar</option>
              <option style={{color:'black'}} value='€'>€ Euro</option>
              <option style={{color:"#5cb85c"}} value='₹'>₹ Rupee</option>
          </select>
          </span>
        </div>
	);
};


export default Currency;