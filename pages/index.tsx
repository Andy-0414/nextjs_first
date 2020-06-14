import React from "react";
import Link from "next/link";

class Index extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.handleInc = this.handleInc.bind(this);
	// 	this.handleDec = this.handleDec.bind(this);
	// }
	state = {
		count: 0,
	};
	handleInc = () => {
		this.setState({
			count: this.state.count + 1,
		});
		console.log("Inc");
	};
	handleDec = () => {
		this.setState({
			count: this.state.count - 1,
		});
		console.log("Dec");
	};
	render() {
		return (
			<div id="app">
				<div>{this.state.count}</div>
				<button onClick={this.handleInc}>+</button>
				<button onClick={this.handleDec}>-</button>
			</div>
		);
	}
}

export default Index;
