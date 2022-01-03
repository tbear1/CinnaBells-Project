import React from 'react';
import './Navbar.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import MenuList from './MenuList';

function Navigation(){

    return(
  <div className="App">
    <Navbar className="color-nav" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Imperial+Script&family=PT+Serif:ital,wght@1,700&display=swap">CinnaBells</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {
            MenuList.map(elem=>(
            <Nav.Link href={elem.url}>{elem.title}
            </Nav.Link>
            ))}
      </Nav>
        </Navbar.Collapse>
      </Container>
</Navbar>
  </div>
    )

}
export default Navigation