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
	inputEl: HTMLInputElement;
	// 생성자
	constructor(props) {
		super(props);
		this.testAxios = this.testAxios.bind(this);
		this.handleAppendTodo = this.handleAppendTodo.bind(this);
	}
	// 랜더링
	render() {
		return (
			<div id="app">
				<button onClick={this.testAxios}>testAxios</button>
				<div className="todo">
					<input type="text" className="todo__input" onKeyPress={this.handleAppendTodo} ref={(el) => (this.inputEl = el)} />
					<TodoList list={this.props.store.todolist}></TodoList>
				</div>
			</div>
		);
	}
	async testAxios() {
		try {
			console.log(await this.props.store.testAxios());
		} catch {
			console.log("connect fail");
		}
	}
	// 엔터 쳤을 시 Todo 추가
	handleAppendTodo(e: React.KeyboardEvent) {
		if (e.key == "Enter") {
			const { value } = e.target as HTMLInputElement;
			// store 사용
			this.props.store.addTodo({
				name: value,
				isFinished: false,
			});
			// value 비움
			this.inputEl.value = "";
		}
	}
}

export default Index;
