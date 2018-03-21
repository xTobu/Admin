import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
	state = {
		response: "",
	};

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res.express }))
			.catch(err => console.log(err));

		axios.get(`/api/hello`).then(res => {
			console.log(res.data)
		});
	}

	callApi = async () => {
		const response = await fetch("/api/hello");
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};

	render() {
		return (
			<div className="Home">
				Admin <p className="App-intro">{this.state.response}</p>
			</div>
		);
	}
}

export default Home;
