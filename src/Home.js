import React from "react";
import Footer from './components/Footer';
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBBtn,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Home() {
  return (
    
    <div className="d-flex justify-content-center align-items-center">

  
    <MDBRow className='g-4'>
    <MDBNavbar color='primary' dark>
        <MDBContainer>
      
          <MDBNavbarBrand href='#'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTao4wZDN5kJllTiVyfGGwSPUaY-swg46JVdQ&usqp=CAU'
              height='100'
              alt=''
              loading='lazy'
            />
             
          </MDBNavbarBrand>
          <MDBCardTitle className='text-bold'>RT Book Shop</MDBCardTitle>
        </MDBContainer>
      </MDBNavbar>

      <MDBCol md='6' style={{ padding: '140px' }}>
        <MDBCard style={{ maxWidth: '540px' }} >
          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXEA8CIdmhLyTYvWb_VQf17lDCCGguHGz8w&usqp=CAU' alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <MDBCardTitle>Login As Admin</MDBCardTitle>
                <MDBCardText>
                No one who achieves success does so without acknowledging the help of others. 
                
                </MDBCardText>
                
            <Link to="/adminlogin">
    <MDBBtn className='me-1' color='success'>
      Login
    </MDBBtn>
  </Link>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBCol>

      <MDBCol md='6' style={{ padding: '140px' }}>
        <MDBCard style={{ maxWidth: '540px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqXQtCxt8lhtiKcmioKMftysqUtGvwhVsAaA&usqp=CAU' alt='...' fluid />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <MDBCardTitle>Login As Customer</MDBCardTitle>
                <MDBCardText>
                Sales without customer service is like stuffing money into a pocket full of holes.
                </MDBCardText>
                
            <Link to="/signin">
    <MDBBtn className='me-1' color='success'>
      Login
    </MDBBtn>
  </Link>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBCol>
      <Footer/>
    </MDBRow>
  
  </div>

  );
}

export default Home;
