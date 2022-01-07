import React, { useContext, useEffect, useState } from "react";

import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import "./Detail.scss";
import { 재고context } from "./App";
import { Nav } from "react-bootstrap";

import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState("");

  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  let 재고 = useContext(재고context);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });

  let { id } = useParams();
  let 찾은상품 = props.shoes.find((상품) => 상품.id == id);
  let history = useHistory();

  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>

      {inputData}
      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />

      {alert === true ? (
        <div className="my-alert-yellow">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (찾은상품.id + 1) +
              ".jpg"
            }
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6 mt-4">
          {/* <h4 className="pt-5">{props.shoes[id].title}</h4> */}

          <h4 className="pt-5"> {찾은상품.title}</h4>

          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>

          <button
            className="btn btn-danger"
            onClick={() => {
              props.dispatch({
                type: "addList",
                payload: { id: 2, name: "새로운상품", quan: 1 },
              });
              history.push("/cart");
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              스위치변경(false);
              누른탭변경(0);
            }}
          >
            상품설명
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              누른탭변경(1);
            }}
          >
            배송정보
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames="effect" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });
  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다</div>;
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다</div>;
  } else {
    return <div>2번째 내용입니다</div>;
  }
}

function state를props화(state) {
  return {
    state: state.reducer,
    ifAlertOpen: state.reducer2,
  };
}

export default connect(state를props화)(Detail);
