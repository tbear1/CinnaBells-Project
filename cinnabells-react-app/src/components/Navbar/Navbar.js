import React from 'react';
import './Navbar.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import MenuList from './MenuList';

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
    <Nav>
          {
            MenuList.map(elem=>(
            <Nav.Link href={elem.url}>{elem.title}
            </Nav.Link>
            ))}
            
        </Nav>
  </Navbar>
        </div>
    )
}
export default Navigation