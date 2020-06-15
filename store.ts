import { action, observable, computed, runInAction } from "mobx";
import { useStaticRendering } from "mobx-react";
import { useMemo } from "react";
import { ITodoItem } from "./components/TodoList";

useStaticRendering(typeof window === "undefined");

let store;

export class Store {
	@observable todolist: ITodoItem[] = [];

	@action
	addTodo(item: ITodoItem) {
		if (this.todolist.length == 0) item.id = 0;
		else item.id = this.todolist[this.todolist.length - 1].id + 1;
		this.todolist.push(item);
	}
	@action
	removeTodo(item: ITodoItem) {
		let idx = this.todolist.findIndex((i) => i.id == item.id);
		if (idx != -1) this.todolist.splice(idx, 1);
	}
	@action
	updateTodo(item: ITodoItem) {
		let idx = this.todolist.findIndex((i) => i.id == item.id);
		if (idx != -1) this.todolist[idx] = item;
	}
}

function initializeStore() {
	const _store = store ?? new Store();

	if (typeof window === "undefined") return _store;
	if (!store) store = _store;

	return _store;
}

export function useStore() {
	const store = useMemo(() => initializeStore(), []);
	return store;
}
