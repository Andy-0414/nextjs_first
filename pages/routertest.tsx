import React from "react";
import TodoList, { ITodoItem } from "../components/TodoList";
import Link from "next/link";
import "./index.scss";
import { inject, observer } from "mobx-react";
import { Store } from "../store";

interface Props {
	store: Store;
}


class RouterTest extends React.Component<Props> {
	// 랜더링
	render() {
		return (
			<div id="app">
                Hello World!
			</div>
		);
	}

}

export default RouterTest;
