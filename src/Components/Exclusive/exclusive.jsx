import React from 'react';
import "./exclusive.css"
import { Container, Row , Col , Button} from 'react-bootstrap';
import exclusive_img from "../Assets/exclusive_image.png"
const exclusive = () => {
  return (
    <>
      <Container className="exclusive">
      <Row className="flex">
            <Col>
            <span className="font">Excluive</span><br/>
            <span className="font">Offers For You</span><br/>
            <h3>ONLY ON BEST SALES PRODUCT</h3>
            <Button className='btn-2'>Check Now</Button>
            </Col>
            <Col>
           <img src={exclusive_img} alt="" width={"300px"}/>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default exclusive;