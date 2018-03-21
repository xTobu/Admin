import React from "react";
import {
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import { LoginRoute } from "./routes/LoginRoute";
import { AdminRoute } from "./routes/AdminRoute";

/* LoginRoute */
import Login from "./views/Login/Login";
import Forgot from "./views/Login/Forgot";

/* AdminRoute */
import Admin from "./views/Admin/Admin";
import Todo from "./views/Admin/Todo";
import Message from "./views/Admin/Message";
import About from "./views/Admin/About";
import About_UserID from "./views/Admin/About/About_UserID";

/*
相關路由設置
 */
export default (
	<Switch>
		{/* <LoginRoute path="/" exact strict component={Login} /> */}
		<Route
			exact
			strict
			path="/"
			render={() =>
			 <Redirect to="/admin" />
			}
		/>
		<LoginRoute path="/login" exact strict component={Login} />
		<LoginRoute path="/login/forgot" exact strict component={Forgot} />

		<AdminRoute path="/admin" exact strict component={Admin} />

		<AdminRoute path="/todo" exact strict component={Todo} />

		<AdminRoute path="/message" exact strict component={Message} />	

		<AdminRoute path="/about" exact strict component={About} />
		<AdminRoute path="/about/:userid" exact strict component={About_UserID} />

		<Route render={() => <h3>No Match Route</h3>} />
	</Switch>
);
