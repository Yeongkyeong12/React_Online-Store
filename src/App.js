import React, { useState } from "react";
import { Row, Col, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import list from "./data";

function App() {
  let [shoes, shoes변경] = useState(list);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoes-store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="background">
        <div class="container p-5">
          <h1 class="display-4">40% Season Off!</h1>
          <p>Go to My Website</p>
          <button class="Primary">Learn more</button>
        </div>
      </div>

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
      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
              alt="product img"
            />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="100%"
              alt="product img"
            />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            {" "}
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="100%"
              alt="product img"
            />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
