// src/store/counterReducer.js

// action type 정의 : 프로그램이 커질 경우 같은 이름의 action이 생길 수 있기 때문에 미리 정의
// module 이름/action 이름
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// increase(), decrease()
// 컴포넌트에서 action을 쉽게 발생시키기 위해
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

// state 초기값 설정
const initialState = {
  number: 9,
};

// Reducer 정의 : 변화를 일으키는 함수
// dispatch가 실행됐을 때 호출되는 함수
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

// 다른 파일에서 counterReducer()를 사용할 수 있도록 export
export default counterReducer;
