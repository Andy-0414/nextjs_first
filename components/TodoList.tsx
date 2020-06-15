import React from "react";
import "./TodoList.scss";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";

export interface ITodoItem {
	id?: number;
	name: string;
	isFinished: boolean;
}
@observer
class TodoList extends React.Component<{ list: ITodoItem[] }> {
	render() {
		const { list } = this.props;

		const todoItemList = list.map((item) => {
			return <TodoItem item={item} key={item.id}></TodoItem>;
		});
		return <ul className="todolist">{todoItemList}</ul>;
	}
}

export default TodoList;
