import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ChickenPage = () => {
    const { state } = useLocation();
    const {menu, id, image, price, size, quantity:qty } = state;
    const [ quantity, setQuantity] = useState(qty);
    const [ totalPrice, setTotalPrice] = useState(""); //SUNNY
    const [ orderInput, setOrderInput ] = useState("");
    console.log("state", state);
    const handleClick = (e) => {
        e.preventDefault();
        setQuantity(quantity - orderInput);
        setTotalPrice(orderInput * price );
        setOrderInput("")
    }
    const handleChange = (e) => {
        setOrderInput(e.target.value);
    }
    
  return (
    <div>
        <h2>{menu}</h2>
        <img  src={image} alt={menu + 'poster'}/>
        
        <p>You can order: {quantity}</p>
        <p>Price ${price}</p>
        <select>
            {size.map((s, index) => <option key={index}>{s}</option> )}
            
        </select> You can adjust how spicey it is
        <form onSubmit={handleClick} id="order_form"> 
            How many do you want to order? 
            <input id="order" type="Number" value={orderInput} onChange={handleChange}/>
            <button  type="submit">Add to cart</button> 
        </form>
        <p>Total Price ${totalPrice}</p>
       
        
        
    </div>
  )
}

export default ChickenPage