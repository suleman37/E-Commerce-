import React from "react";
import { Container, Row ,Col } from "react-bootstrap";
import "./item.css";
import { Link } from "react-router-dom";
// import Product from "../../Pages/Product"

const item = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="item">
              <Link to="/Pages/Product"><img src={props.image} alt="" width={"250px"} /></Link>
              <p className="para">{props.name}</p>
              <div className="item-prices">
                <div className="item-price-new">${props.new_price}</div>
                <div className="item-price-old">${props.old_price}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default item;