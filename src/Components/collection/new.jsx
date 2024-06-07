import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/item";
import new_collections from "../Assets/new_collections";
import "./new.css";

const Popular = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="flex">
            <h1 className="head">New Collection</h1>
          </Col>
        </Row>
        <Row>
          <Col className="grid gap">
            {new_collections.map((item, i) => {
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
