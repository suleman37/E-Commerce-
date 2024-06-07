import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/item";
import new_data from "../Assets/data";
import "./Popular.css";

const Popular = () => {
  return (
    <>
      <Container>
        <Row>
            <Col className="flex">
            <h1 className="head">Popular In Women</h1>
            </Col>
        </Row>
        <Row>
          <Col className="grid">
          {new_data.map((item, i) => {
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
          })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Popular;
