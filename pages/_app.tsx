import "./app.scss";

import App from "next/app";
import React from "react";

export default class NextFirst extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Component>
				<Component {...pageProps} />
			</Component>
		);
	}
}
