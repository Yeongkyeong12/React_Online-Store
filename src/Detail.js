import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let box = styled.div`
  padding-top: 30px;
`;

let title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();
  let foundProduct = props.shoes.find((x) => x.id === id);

  return (
    <div className="container">
      <box>
        <title className="red">Detail</title>
      </box>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt="img"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{foundProduct.title}</h4>
          <p>{foundProduct.content}</p>
          <p>{foundProduct.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
