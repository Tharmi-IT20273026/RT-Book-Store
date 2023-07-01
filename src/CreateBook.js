import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { useNAvigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBTextArea
}from 'mdb-react-ui-kit';



function CreateBook(){

 
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [date, setdate] = useState("");
  const [bookType, setBookType] = useState("");
  const [prize, setPrize] = useState("");
  const [description, setdescription] = useState("");
  const [listStatus, setListStatus] = useState("");

  const addBook = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/postbook",{
      bookName:bookName,
      bookAuthor:bookAuthor,
      book_publication_date:date,
      bookType:bookType ,
      bookPrize: prize,
      bookDescription:description,
    }).then((response) => {
      console.log("success")
      window.location.replace("http://localhost:3000/adminBookList")
    })

}


 



   
  return (
    <MDBContainer fluid>
  <Header/>
  <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Book Information</p>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="atlas" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='Book Name'
                id='form1'
                type='text'
                className='w-100'
                required
                onChange={e => setBookName(e.target.value)}
                size='lg'
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="user" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='Author Name'
                id='form1'
                type='text'
                className='w-100'
                onChange={e => setBookAuthor(e.target.value)}
                size='lg'
                required
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="calendar-alt" size='lg'style={{ padding: '25px' }} />
              <MDBInput
                label='Year'
                id='typeNumber'
                type='number'
                onChange={e => setdate(e.target.value)}
                size='lg'
                required
                style={{ width: '100%' }} // Increase input field length
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fab icon="microsoft" size='lg'style={{ padding: '25px' }} />
              <MDBInput
                label='Book Type'
                id='form1'
                type='text'
                className='w-100'
                required
                onChange={e => setBookType(e.target.value)}
                size='lg'
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="hand-holding-usd" size='lg' style={{ padding: '25px' }}/>
              <MDBInput
                label='Prize'
                id='typeNumber'
                type='number'
                onChange={e => setPrize(e.target.value)}
                size='lg'
                required
                style={{ width: '100%' }} // Increase input field length
              />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="comment" size='lg' style={{ padding: '25px' }}/>
              <MDBTextArea
                label='Description'
                id='textAreaExample'
                rows={4}
                onChange={e => setdescription(e.target.value)}
                size='lg'
                required
              />
            </div>
      
            <MDBBtn className='me-1' color='success' size='lg' onClick={addBook}>Add Book</MDBBtn>
            <br/>
           
            <Link to="/adminBookList">
    <MDBBtn className='me-1' color='dark'>
      Back
    </MDBBtn>
  </Link>
          </MDBCol>
         

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmDg0bLe4Xgo69qxYgkNl2lUahM7Dtlz5zw&usqp=CAU' fluid />
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>
        <Footer/>
    </MDBContainer>
  );

}

export default CreateBook;