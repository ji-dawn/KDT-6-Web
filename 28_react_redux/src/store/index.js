import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";

// combineReducers : 여러 개의 reducer를 하나로 합치는 일
const rootReducer = combineReducers({
  counter: counterReducer,
  isData: isDataReducer,
});

// 다른 파일에서 여러 reducer를 합친 최종 reducer(rootReducer)
export default rootReducer;
