
import React, { useEffect, useState } from "react";
import Cheader from './components/Cheader';
import Footer from './components/Footer';
import './cart.css'
import { Link } from "react-router-dom";
import { MDBBtn ,MDBIcon} from 'mdb-react-ui-kit';


function Cart({ cart, setCart, handleChange,setShow }) {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.amount * item.prize;
    });
    setPrice(ans);
  };



  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
          <div>
          
            <MDBIcon fas icon="plus-square" onClick={() => handleChange(item, +1)}/>
           
            <span>{item.amount}</span>
            
            <MDBIcon fas icon="minus-square" onClick={() => handleChange(item, -1)}/>
          </div>
          <div>
            <span>{item.prize}</span>
           
            <MDBIcon fas icon="trash-alt" onClick={() => handleRemove(item.id)}/>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>

      <div><MDBBtn className='me-1' color='success'>
        Buy Book
      </MDBBtn>
      <MDBBtn className='me-1' color='info' onClick={()=>setShow(true)}>
       Back
      </MDBBtn>
      </div>
    </article>
   
  );
}

export default Cart;


