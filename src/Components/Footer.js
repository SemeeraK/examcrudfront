import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div className='footer'>
                <img src="https://i.postimg.cc/HLjq4dTw/OIP-removebg-preview.png" alt="" style={{height:'100px'}} />
                <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula magna nec ante mattis, id pharetra elit rutrum.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
            <i class="fa-2x fa-brands fa-facebook"></i>
            <i class="fa-brands fa-2x fa-instagram"></i>
            <i class="fa-brands fa-2x fa-whatsapp"></i>
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Footer
