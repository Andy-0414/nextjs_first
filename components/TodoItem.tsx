import React from "react";
import "./TodoItem.scss";
import { ITodoItem } from "./TodoList";
import { observer, inject } from "mobx-react";
import { Store } from "../store";

interface Props {
	store?: Store;
	item: ITodoItem;
}

@inject("store")
@observer
class TodoItem extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.handleRemoveThis = this.handleRemoveThis.bind(this);
		this.handleTodoFinish = this.handleTodoFinish.bind(this);
	}
	render() {
		const { item } = this.props;
		return (
			<li className={"todolist__item " + (item.isFinished ? "finish" : "")} onClick={this.handleTodoFinish}>
				<p>{item.name}</p>
				<button onClick={this.handleRemoveThis}>X</button>
			</li>
		);
	}

	// TodoItem 삭제
	handleRemoveThis() {
		let { item, store } = this.props;

		// store 사용
		store.removeTodo(item);
	}
	// TodoItem 완료 처리
	handleTodoFinish() {
		let { item, store } = this.props;
		item.isFinished = !item.isFinished;

		// store 사용
		store.updateTodo(item);
	}
}

export default TodoItem;
