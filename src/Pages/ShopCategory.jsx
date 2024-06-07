import React from 'react'
import { Col, Container , Row } from 'react-bootstrap';
import all_product from '../Components/Assets/all_product';
import Item from '../Components/Item/item';

const ShopCategory = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col className='center'>
          <img src={props.banner} alt="" width={"100%"} height={"90%"}/>
          </Col>
        </Row>
        <Row>
          <Col className='grid gap'>
          {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }else{
            return null;
          }
        })}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ShopCategory;