import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
const LoginTitle = styled.h2`
	color: palevioletred;
`;
const LoginDiv = styled.div`
	width: 350px;
	padding: 30px;
`;
export function LoginRoute({ component: Component, ...rest }) {
	return (
		<div className="login">
			<LoginDiv>
				<div className="loginHeader">
					<LoginTitle>Login</LoginTitle>
				</div>
				<Route {...rest} render={props => <Component {...props} />} />
			</LoginDiv>
		</div>
	);
}
