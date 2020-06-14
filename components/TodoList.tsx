import React from "react";
import "./TodoList.scss";
import TodoItem from "./TodoItem";

export interface ITodoItem {
	name: string;
	isFinished: boolean;
}
class TodoList extends React.Component<{ list: ITodoItem[] }> {
	render() {
		const { list } = this.props;

		const todoItemList = list.map((item) => {
			return <TodoItem item={item} key={item.name}></TodoItem>;
		});
		return <ul className="todolist">{todoItemList}</ul>;
	}
}

export default TodoList;
