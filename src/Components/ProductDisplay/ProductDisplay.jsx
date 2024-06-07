import React from 'react'
import { Container , Row , Col } from 'react-bootstrap';

const ProductDisplay = (props) => {
  return (
    <>
     <Container>
      <Row>
        <Col>
        <img src={props.image} alt="" />
        </Col>
      </Row>
     </Container>
    </>
  )
}

export default ProductDisplay;