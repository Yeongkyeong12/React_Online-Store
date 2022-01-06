import React, { useState, useContext } from "react";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import Data from "./data";
import Detail from "./Detail";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cart from "./Cart.js";
export let 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  //로딩중 UI
  let [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoesHere</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
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
          <div className="background">
            <div className="container p-5">
              <h1 className="display-4">40% Season Off!</h1>
              <p>Go to My Website</p>
              <Button className="Primary">Learn more</Button>
            </div>
          </div>

          <div className="container">
            <재고context.Provider value={재고}>
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} />;
                })}
              </div>
            </재고context.Provider>
            <button
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    shoes변경([...shoes, ...result.data]);
                  })
                  .catch(() => {
                    console.log("실패!");
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </재고context.Provider>
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>

        <Route path="/:id">
          <div>아무거나 적었어용</div>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  // let 재고 = useContext(재고context);
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
        alt="img"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <Test />
    </div>
  );
}
function Test() {
  let 재고 = useContext(재고context);
  return <p>{재고}</p>;
}

export default App;
