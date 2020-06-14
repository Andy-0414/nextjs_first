import React from "react";
import "./TodoItem.scss";
import { ITodoItem } from "./TodoList";

class TodoItem extends React.Component<{ item: ITodoItem }> {
	render() {
		const { item } = this.props;
		return <li className="todolist__item">{item.name}</li>;
	}
}

export default TodoItem;
