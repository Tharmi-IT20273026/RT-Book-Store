import React, { useEffect, useState } from "react";
import Footer from './components/Footer';
import Cheader from './components/Cheader';
import axios from 'axios';
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
  MDBCheckbox
}from 'mdb-react-ui-kit';

function UserSignUp() {

const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [registrationStatus, setRegistrationStatus] = useState("");


const handleRegister = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/customerregister",{
      email:email,
      user:username,
      password:password,
    }).then((response) => {
      console.log("jgf")
      window.location.replace("http://localhost:3000/books")
    })

}


  return (
  <MDBContainer fluid>
    <Cheader/>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register As Book Reader</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'  onChange={e => setUsername(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' onChange={e => setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' onChange={e => setPassword(e.target.value)}/>
              </div>

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div> */}

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>
	
              <MDBBtn className='mb-4' size='lg' onClick={handleRegister}>Register</MDBBtn>
              
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>
            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>



      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
        />
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
        />
<Footer/>
    </MDBContainer>
  );
}

export default UserSignUp;