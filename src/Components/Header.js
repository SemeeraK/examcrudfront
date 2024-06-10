import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Header() {
  return (
    <div>
          
    
<Navbar expand="lg" id='header' className="bg-body-tertiary box-shadow">
      <Container>
        <Navbar.Brand href="#home">
          <Link to={'/'} style={{textDecoration:"none"}}>

          <img src="https://i.postimg.cc/HLjq4dTw/OIP-removebg-preview.png" alt="" style={{height:'100px'}} />
          </Link>      

          </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
<Link to={'/appoinment'}style={{textDecoration:'none'}}>
                <Nav.Link href="#link" >All Appoinments</Nav.Link>
  
</Link>            </Nav>
            {/* <i class="fa-solid fa-2x fa-cart-shopping"></i> */}
            <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>

       </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />


      </Container>
    </Navbar>
    </div>
  )
}

export default Header
