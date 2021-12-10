import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let foundProduct = props.shoes.find(function (product) {
    return product.id === id;
  });

  let history = useHistory();

  return (
    <div className="container">
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
