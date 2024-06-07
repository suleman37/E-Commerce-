import React, { useState } from "react";
import "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/logo.png";
import Cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const {user, loginWithRedirect , isAuthenticated , logout } = useAuth0();
  return (
    <>
      <Container className="navbar">
        <Row className="flex">
          <Col className="flex">
            <img src={logo} alt="" width={"50px"} />
            <h4>SHOPPER</h4>
          </Col>
          <Col className="menu">
            <ul className="flex">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li
                  onClick={() => {
                    setMenu("Shop");
                  }}
                >
                  Shop{menu === "Shop" ? <hr className="hr" /> : <></>}
                </li>
              </Link>
              <Link to="/men" style={{ textDecoration: "none" }}>
                {" "}
                <li
                  onClick={() => {
                    setMenu("Men");
                  }}
                >
                  Men{menu === "Men" ? <hr className="hr" /> : <></>}
                </li>
              </Link>
              <Link to="/women" style={{ textDecoration: "none" }}>
                <li
                  onClick={() => {
                    setMenu("Women");
                  }}
                >
                  Women{menu === "Women" ? <hr className="hr" /> : <></>}
                </li>
              </Link>
              <Link to="/kids" style={{ textDecoration: "none" }}>
                <li
                  onClick={() => {
                    setMenu("Kids");
                  }}
                >
                  Kids{menu === "Kids" ? <hr className="hr" /> : <></>}
                </li>
              </Link>
            </ul>
          </Col>
          <Col className="flex">
            {
              isAuthenticated && (
                <div className="flex">
                  <img src={user.picture} alt="" id="user"/>
                </div>
              )
            }
            {isAuthenticated ? (
              <button  className="bttn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button className="bttn" onClick={() => loginWithRedirect()}>
                Login
              </button>
            )}

            <Link to="/cart">
              <img src={Cart} alt="" width={"30px"} />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;
