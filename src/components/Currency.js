import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './ComponentStyles.css';
const Currency = () => {
    const { budget,dispatch,expenses, remaining,currency } = useContext(AppContext);
    const [name, setName] = useState('');
    
    const changeCurrency = (val)=>{
        dispatch({
            type: 'SET_CURRENCY',
            payload: val,
        })
	}

    const styles = {
        hover_color: {
          backgroundColor: "#f1f1f1",
        },
      };

    
    return (

		<div className='alert alert-secondary'>
        <label style={{marginLeft: '1rem' , backgroundColor:'#a5e2a0', color:'white'}} >Currency (
      <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{backgroundColor:'#a5e2a0', color:'white'}}>
        <option style={{color:'black'}} value="£">£ Pound</option>
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option style={{color:'black'}} value="₹">₹ Rupee</option>
      </select>	
        )</label>
    </div>

	);
};


export default Currency;