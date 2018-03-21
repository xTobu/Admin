import React from "react";
import ReactDOM from "react-dom";

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from "react-router-dom";
// import { ashRouter } from "react-router-dom"

import { Provider } from "react-redux";

import store from "./redux/store";

//加入 normalize.css
//https://stackoverflow.com/questions/42119878/how-to-use-normalize-css-using-npm-install-with-webpack
import "normalize.css";

import "assets/css/index.css";

import registerServiceWorker from "./registerServiceWorker";

import routes from "./routes";

// Views
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>{routes}</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

registerServiceWorker();
