import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as actionCreators from "../../redux/actions";
import store from "redux/store";
import styled from "styled-components";
import { Button } from "antd";

class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataForm: {
				Name: "Silva",
				Tag: "ManCity",
				Text: "We are blues",
			},
		};
	}
	// 處理文字框中輸入文字用的方法
	handleFormInputChange = event => {
		// flowtype檢查用的
		if (event.target instanceof HTMLInputElement) {
			this.setState({
				dataForm: {
					//https://github.com/reactstrap/reactstrap/issues/522
					//state.dataForm已被綁定, 必須先MAP過去 不能讓該值有空的時候
					...this.state.dataForm,
					[event.target.name]: event.target.value,
				},
			});
		}
	};

	// 處理 Send 的方法
	handleSubmit = event => {
		event.preventDefault();
		// store中的狀態值發送要新增的action，onItemAdd方法會被綁到props裡面
		console.log(store.getState().Message);

		// if (!this.state.inputValue) return;

		this.props.actionDataAdd({
			id: Date.now(),
			Name: this.state.dataForm.Name,
			Tag: this.state.dataForm.Tag,
			Text: this.state.dataForm.Text,
		});
		this.setState({
			dataForm: {
				Name: "",
				Tag: "",
				Text: "",
			},
		});
	};

	handleRemove = event => {};

	render() {
		return (
			<div className="MessageForm">
				<form onSubmit={this.handleSubmit}>
					<FormTitle>Message Form</FormTitle>

					<input
						type="text"
						name="Name"
						placeholder="Name"
						value={this.state.dataForm.Name}
						onChange={this.handleFormInputChange}
					/>
					<input
						type="text"
						name="Tag"
						placeholder="Tag"
						value={this.state.dataForm.Tag}
						onChange={this.handleFormInputChange}
					/>
					<input
						type="text"
						name="Text"
						placeholder="Say something"
						value={this.state.dataForm.Text}
						onChange={this.handleFormInputChange}
					/>
					<Button type="primary" htmlType="submit">
						Create
					</Button>
					{/* <input type="submit" value="Send" /> */}
				</form>
			</div>
		);
	}
}
const FormTitle = styled.h3`
	color: palevioletred;
`;

// 將store中的items值傳綁到props上
// const mapStateToProps = store => ({
// 	Messages: store.Message,
// });
// export default connect(mapStateToProps ,actionCreators)(MessageForm);

export default MessageForm;
