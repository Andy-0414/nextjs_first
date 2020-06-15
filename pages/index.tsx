import React from "react";
import TodoList, { ITodoItem } from "../components/TodoList";
import Link from "next/link";
import "./index.scss";
import { inject, observer } from "mobx-react";
import { Store } from "../store";

interface Props {
	store: Store;
}

@inject("store")
@observer
class Index extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.handleAppendTodo = this.handleAppendTodo.bind(this);
	}
	render() {
		// const { todoStore } = this.props;
		return (
			<div id="app">
				<div className="todo">
					<input type="text" className="todo__input" onKeyPress={this.handleAppendTodo} />
					<TodoList list={this.props.store.todolist}></TodoList>
				</div>
			</div>
		);
	}
	handleAppendTodo(e: React.KeyboardEvent) {
		if (e.key == "Enter") {
			const { value } = e.target as HTMLInputElement;
			this.props.store.addTodo({
				name: value,
				isFinished: false,
			});
		}
	}
}

export default Index;
