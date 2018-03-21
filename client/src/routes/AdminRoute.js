import React from "react";
// import Header from "../components/ContainerUI/Header";
import { Header, SideBar } from "../components/ContainerUI";
import { Route, Link } from "react-router-dom";

export function AdminRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props => (
				<div className="app">
					<Header />
					<main className="app-main">
						<ul className="nav navbar-nav">
							<li>
								<Link to="/admin">admin</Link>
							</li>
							<li>
								<Link to="/todo">/todo</Link>
							</li>
							<li>
								<Link to="/message">/message</Link>
							</li>
							<li>
								<Link to="/about">/about</Link>
							</li>
							<li>
								<Link to="/about/4545634">
									/about/user/4545634
								</Link>
							</li>
						</ul>
						{/* <Switch /> */}

						<Component {...props} />
					</main>
					<SideBar />
				</div>
			)}
		/>
	);
}
