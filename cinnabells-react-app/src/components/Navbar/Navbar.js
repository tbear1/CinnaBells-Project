import React from 'react';
import './Navbar.css';
import {Navbar,Container} from 'react-bootstrap';

export default Navigation
function Navigation(){
    return(
        <div className="App">
         <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
        </div>
    )
}