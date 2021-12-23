import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap';
const Navbar = () => {
return (<div>Navbar</div>)
}
export default Navbar
function Navbar(){
    return(
        <>
        <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="CinnaBells Logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
        </>
    )
}