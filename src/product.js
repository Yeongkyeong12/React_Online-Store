import React, { useState } from "react";
import { Row, Col, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import list from "./data";

function productDetail() {

  let [shoes, shoes변경] = useState(list);

  return {
    <Container>
    <Row>
      <Col lg={true}>
        <img
          src="https://codingapple1.github.io/shop/shoes1.jpg"
          width="100%"
          alt="product img"
        />
        <h4>{shoes[0].title}</h4>
        <p>
          {shoes[0].content}, {shoes[0].price}
        </p>
      </Col>
      <Col lg={true}>
        <img
          src="https://codingapple1.github.io/shop/shoes2.jpg"
          width="100%"
          alt="product img"
        />
        <h4>{shoes[1].title}</h4>
        <p>
          {shoes[1].content}, {shoes[1].price}
        </p>
      </Col>
      <Col lg={true}>
        <img
          src="https://codingapple1.github.io/shop/shoes3.jpg"
          width="100%"
          alt="product img"
        />
        <h4>{shoes[2].title}</h4>
        <p>
          {shoes[2].content}, {shoes[2].price}
        </p>
      </Col>
    </Row>
  </Container>
  
  }
 

}
