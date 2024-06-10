import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Landing.css';  

function Landing() {
  return (
    <div className='land'>
      <Row>
        <Col lg={6}>
<div className='text-center p-4 mt-5 m-5'>
    <h1>Know All About !!!!!!!</h1>
                <p>Click Here to Explore More!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad possimus hic, quisquam dolores eos temporibus quod ab neque quam animi corporis laborum velit distinctio tempora odit! Maiores, assumenda eos!</p>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                <button className='btn rounded px-3 border'>Get Appoinment</button>
              </Link>
    
</div>         
        </Col>
        <Col lg={6}>
        <img src="https://i.postimg.cc/x1dsz5Ph/exam1.jpg" alt="" style={{width:'75%'}} />
        </Col>
      </Row>



    </div>
  );
}

export default Landing;
