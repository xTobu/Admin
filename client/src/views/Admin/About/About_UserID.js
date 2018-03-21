import React, { Component } from "react";

class About_UserID extends Component {
	render() {
		return (
			<div className="About_UserID">
            About_UserID: {this.props.match.params.userid}
			</div>
		);
	}
}


export default About_UserID;

