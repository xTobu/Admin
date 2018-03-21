import React, { Component } from "react";
import { Form, Icon, Input, Button, message } from "antd";
import styled from "styled-components";
const LoginDiv = styled.div`
	width: 80%;
`;

const FormItem = Form.Item;

class Login extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
				this.props.history.push('/message')			
			} else {
				message.error("還有欄位沒填", 1);
				
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<LoginDiv>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem>
						{getFieldDecorator("userName", {
							rules: [
								{
									required: true,
									message: "請輸入帳號",
								},
							],
						})(
							<Input
								prefix={
									<Icon
										type="user"
										style={{ color: "rgba(0,0,0,.25)" }}
									/>
								}
								placeholder="Username"
							/>
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator("password", {
							rules: [
								{
									required: true,
									message: "請輸入密碼",
								},
							],
						})(
							<Input
								prefix={
									<Icon
										type="lock"
										style={{ color: "rgba(0,0,0,.25)" }}
									/>
								}
								type="password"
								placeholder="Password"
							/>
						)}
					</FormItem>
					<FormItem>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Log in
						</Button>
					</FormItem>
				</Form>
			</LoginDiv>
		);
	}
}

export default Form.create()(Login);
