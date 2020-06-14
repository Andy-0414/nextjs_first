import React from "react";
import TodoList, { ITodoItem } from "../components/TodoList";
import Link from "next/link";
import "./index.scss";

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.handleAppendTodo = this.handleAppendTodo.bind(this);
	}

	state = {
		todolist: [{ name: "Hello", isFinished: false }],
	};
	render() {
		// const { todoStore } = this.props;
		return (
			<div id="app">
				<div className="todo">
					<input type="text" className="todo__input" onKeyPress={this.handleAppendTodo} />
					<TodoList list={this.state.todolist}></TodoList>
				</div>
			</div>
		);
	}
	handleAppendTodo(e: React.KeyboardEvent) {
		if (e.key == "Enter") {
			const { value } = e.target as HTMLInputElement;
			this.state.todolist.push({
				name: value,
				isFinished: false,
			});
			console.log(this.state.todolist);
			this.setState(() => ({
				todolist: this.state.todolist,
			}));
		}
	}
}

export default Index;
