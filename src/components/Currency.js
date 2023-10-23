import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { AppContext } from '../context/AppContext';
import './ComponentStyles.css';


const Currency = () => {
    const { budget,dispatch,expenses, remaining,currency } = useContext(AppContext);
    const [name, setName] = useState('');
    
    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val.target.innerHTML,
        })
	}

    const styles = {
        hover_color: {
          backgroundColor: "#f1f1f1",
        },
      };

    
    return (
	// 	<div className='alert alert-secondary' style={{backgroundColor:'#a5e2a0'}}>
    //     <label style={{marginLeft: '1rem' , backgroundColor:'#a5e2a0', color:'white'}} >Currency (
    //   <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{backgroundColor:'#a5e2a0', color:'white'}}>
    //     <option style={{color:'black'}} value="£">£ Pound</option>
    //     <option style={{color:'black'}} value="$">$ Dollar</option>
    //     <option style={{color:'black'}} value="€">€ Euro</option>
    //     <option style={{color:'black'}} value="₹">₹ Rupee</option>
    //   </select>	
    //     )</label>
    // </div>

    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic" style= {{height: "57px", width: "100%", background: "#a5e2a0", color: "white", border: "1px solid transparent"}}  >
    
    Currency ({currency})
    
    </Dropdown.Toggle>
    <Dropdown.Menu id="DDmenu"   style= {{width: "100%", background: "#a5e2a0"}}  >
    <Dropdown.Item className="item" href="#"  onClick={changeCurrency}  value="$">$ Dollar</Dropdown.Item>
    <Dropdown.Item className="item" href="#"  onClick={changeCurrency}  value="£">£ Pound</Dropdown.Item>
    <Dropdown.Item className="item" href="#"  onClick={changeCurrency}  value="€">€ Euro</Dropdown.Item>
    <Dropdown.Item className="item" href="#"  onClick={changeCurrency}  value="₹">₹ Rupee</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>

	);
};


export default Currency;