import React, { useState } from "react";
import { Row, Col, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Data from "./data";
import Detail from "./Detail";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoes변경] = useState(Data);

  console.log(shoes변경);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoes-store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
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

      <Switch>
        <Route exact path="/">
          <div class="background">
            <div class="container p-5">
              <h1 class="display-4">40% Season Off!</h1>
              <p>Go to My Website</p>
              <button class="Primary">Learn more</button>
            </div>
          </div>

          <Container>
            <Row>
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} />;
              })}
            </Row>
          </Container>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">
          <div>blabla</div>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <Col lg={true}>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
        alt="img"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content}, {props.shoes.price}
      </p>
    </Col>
  );
}

export default App;
