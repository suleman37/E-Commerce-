import React from 'react';
import {Container , Row , Col} from 'react-bootstrap';
import "./Footer.css";
import logo from "../Assets/logo_big.png";

const Footer = () => {
  return (
    <>
      <Container className='footer'>
        <Row className='center'>
            <Col   className="menu" >
            <img src={logo} alt="" />
            <h1>SHOPPER</h1>
            <ul className='flex'>
                <li>Company</li>
                <li>About</li>
                <li>Offices</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            </Col>
        </Row>
        <Row>
            <Col>
            <hr/>
            <p className='f-cen'>Copy @ 2023 - All Right Reserved</p>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer;