import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React, { useEffect, useState } from "react";
import { MDBIcon } from 'mdb-react-ui-kit';

function Cheader({size, setShow}) {

    return (
      <>
        <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="/" onClick={()=>setShow(true)}>RT Book Store</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/signin">Sign In</Nav.Link>
      <Nav.Link href="/usersignup">Sign Up</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#">
        <MDBIcon fas icon="shopping-cart"  size="lg"  onClick={()=>setShow(false)}/>
         
        <span>{size}</span>
      </Nav.Link>
    </Nav>
  </Container>
</Navbar>
       
  
      
      </>
    );
  }
  
  export default Cheader;