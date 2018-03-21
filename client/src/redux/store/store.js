import { createStore } from "redux";

import reducers from "../reducers";

// @Store
//
// store = createStore(reducer)
// 使用redux dev tools
// 如果要正常使用是使用
//const store = createStore(itemApp)
// const store = createStore(
// 	itemApp,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default function configureStore() {
// 	const store = createStore(
// 		itemApp,
// 		window.__REDUX_DEVTOOLS_EXTENSION__ &&
// 			window.__REDUX_DEVTOOLS_EXTENSION__()
// 	);
// 	return store;
// }

export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);