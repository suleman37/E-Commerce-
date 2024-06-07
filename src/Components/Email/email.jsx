import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./email.css";

const email = () => {
  return (
    <>
      <Container className="email">
        <Row className="center">
          <Col>
            <span className="font-ex">Get Excluive Offers On Your Email</span>
            <br />
            <h4 style={{"color" : "gray"}}>SUBSCRIBE TO OUR NEWSLETTER AND STAY UPDATED</h4>
            <form method="POST" action="https://formspree.io/f/xvoejdbn">
            <input type="email" name="email" id="email" placeholder="Enter Your Email"/>
            <button className="btn-3" type="Submit">Subscribe</button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default email;