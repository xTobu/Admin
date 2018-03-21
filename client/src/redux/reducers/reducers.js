// @flow

// @Reducer
//
// Add Item: action payload = action.payload
// Del Item: action payload = action.id
// 使用純粹函式的陣列unshift，不能有副作用
// state(狀態)一開始的值是空陣列`state=[]`
import { combineReducers } from "redux";

import { items } from "./reducerTodo";
import { Message } from "./reducerMessage";


const Reducers = combineReducers({
	items,
	Message
});

export default Reducers;
