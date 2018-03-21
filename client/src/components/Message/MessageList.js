import React, { Component } from "react";
import { Card } from "antd";
import styled from "styled-components";
const FormTitle = styled.h3`
	color: palevioletred;
`;
class MessageList extends Component {
	handleDelete = id => {
		this.props.actionDataDelete(id);
	};

	render() {
		const { Messages } = this.props;
		return (
			<div className="MessageList">
				<FormTitle>MessageList</FormTitle>

				{Messages.datas.map((item, index) => (
					<div
						key={item.id}
						style={{
							margin: "10px",
						}}
					>
						<Card
							key={item.id}
							title={item.id}
							style={{ width: 300 }}
						>
							<p>
								<span>Name：</span>
								{item.Name}
							</p>
							<p>
								<span>Tag：</span>
								{item.Tag}
							</p>
							<p>
								<span>Text：</span> {item.Text}
							</p>
							<button onClick={() => this.handleDelete(item.id)}>
								Delete
							</button>
						</Card>
					</div>
				))}
			</div>
		);
	}
}

export default MessageList;
