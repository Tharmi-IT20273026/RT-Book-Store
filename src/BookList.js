import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from 'antd';
import Header from './components/Header';
import Cheader from './components/Cheader';
import Footer from './components/Footer';
import Cart from './Cart';
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';
import './cart.css';


const { Meta } = Card;



function BookList(){


 
  const [booklist, setBookList] = useState([]);
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

  const handleCart =(booklist)=>{
   
  	let isPresent = false;
		cart.forEach((product)=>{
			if (booklist.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, booklist]);
  }


	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}


  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8081/booklist');
        setBookList(res.data); // Update the booklist state with the fetched data
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);



  return (
    <div>
    
    <Cheader size = {cart.length} setShow={setShow}/>
    {/* {
			show ? <BookList handleCart={handleCart} /> : <Cart cart={cart} setCart={setCart} handleCart={handleCart} />
		} */}
     {
        !show &&  <Cart cart={cart} setCart={setCart}  handleChange={handleChange} setShow={setShow}/>
      }
    

    <br /> <br />
    { show && 
    <Row gutter={[16, 16]} style={{ padding: '0 130px' }}>
      {booklist.map((card) => (
        <Col span={6} key={card.id} style={{ marginBottom: '24px' }}>
          <Card
            hoverable
            style={{ width: 250, height: '100%' }}
            cover={<img alt="" src={card.image} style={{ height: '200px', objectFit: 'cover' }} />}
          >
              <Meta
              title={<strong>{card.name}</strong>}
              description={<strong>Rs.{card.prize}</strong>}
             
            /><br />
            <Meta 
            description={<strong>Quantity : {card.amount}</strong>}/>
            <br/>


            <MDBBtn className='mx-2' color='danger' onClick={()=>handleCart(card)}>
              Add To Cart
            </MDBBtn>
           
          </Card>
        </Col>
      ))}
    </Row>
    }
    <br /> <br />
    <Footer />
      
            {
		      	warning && <div className='warning'>Item is already added</div>
		        }
  </div>
  );
}
export default BookList;


