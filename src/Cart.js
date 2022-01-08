import React, { useEffect, memo } from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {
  function clickButton() {
    props.dispatch({ type: "alert닫기" });
  }

  let state = useSelector((state) => state);
  console.log(state.reducer);
  let dispatch = useDispatch();

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>제품id</th>
            <th>제품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({
                        type: "수량증가",
                        데이터: a.id,
                      });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량감소", 데이터: a.id });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {props.ifAlertOpen === true ? (
        <div className="my-alert-yellow">
          <p>신규고객 20% 할인 행사 중입니다!</p>
          <button
            className="close"
            onClick={() => {
              clickButton();
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
      <Parent 이름="Jane" 나이="20"></Parent>
    </div>
  );
}

function Parent(props) {
  return (
    <div>
      <Child1 이름={props.이름}></Child1>
      <Child2 나이={props.나이}></Child2>
    </div>
  );
}

function Child1() {
  useEffect(() => {
    console.log("렌더링됨1");
  });
  return <div>1111</div>;
}
let Child2 = memo(function () {
  useEffect(() => {
    console.log("렌더링됨2");
  });
  return <div>2222</div>;
});

export default Cart;
