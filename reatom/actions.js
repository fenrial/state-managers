import nanoid from 'nanoid';
import { declareAction, declareAtom } from '@reatom/core';

export const inputChange = declareAction();

export const addTodo = declareAction();
export const checkTodo = declareAction();
export const removeTodo = declareAction();

export const inputAtom = declareAtom('', on => [
	on(inputChange, (state, value) => value),
]);

export const taskListAtom = declareAtom([], on => [
	on(addTodo, (state, value) => [
		...state,
		{
			text: value,
			id: nanoid(5),
			checked: false,
		},
	]),
	on(checkTodo, (state, { checked, id }) =>
		state.map(todo => {
			if (todo.id === id) {
				todo.checked = checked;
			}
			return todo;
		}),
	),
	on(removeTodo, (state, id) => state.filter(todo => todo.id !== id)),
]);
