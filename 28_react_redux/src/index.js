import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "./App2";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

// state 초기값 설정
const initialState = {
  number: 9,
};

// Reducer 정의 : 변화를 일으키는 함수
// dispatch가 실행됐을 때 호출되는 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        number: state.number + 1,
      };
    case "DECREMENT":
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

// store 정의 : 상태를 관리하는 공간
// 하나의 프로젝트에는 단 하나의 sotre만 있어야 함
const store = configureStore({ reducer: reducer }, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider 컴포넌트 : store라는 props를 반드시 가져야 함
  // Provider 하위 컴포넌트들은 store에 저장된 state들을 사용할 수 있다.
  <Provider store={store}>
    <App2 />
  </Provider>
);
