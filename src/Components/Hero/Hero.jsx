import React from 'react';
import "./Hero.css"
import { Container, Row , Col, Button} from 'react-bootstrap';
import hero from "../Assets/hero_image.png";
import hand from "../Assets/hand_icon.png";

const Hero = () => {
  return (
    <>
      <Container className="hero-bg">
        <Row className="flex">
            <Col className="gap">
            <h3>NEW ARRIVALS ONLY</h3>
            <span className="font ">new</span><img src={hand} alt="" width={"70px"}/><br/>
            <span className="font">collections</span><br/>
            <span className="font">for everyone</span><br/>
            <Button className='btn-2'>Latest Collection</Button>
            </Col>
            <Col className='hero-img'>
            <img src={hero} alt="" width={"350px"}/>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Hero;