import React from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {
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
          {state.reducer.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({
                        type: "increase",
                      });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "decrease" });
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
            onClick={() => {
              props.dispatch({ type: "alert닫기" });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

// function state를props화(state) {
//   return {
//     state: state.reducer,
//     ifAlertOpen: state.reducer2,
//   };
// }

// export default connect(state를props화)(Cart);

export default Cart;
