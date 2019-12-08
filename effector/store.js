import { createStore } from 'effector';
import { addTodo, removeTodo, inputChange, checkTodo } from './events';
import nanoid from 'nanoid';

export const taskListStore = createStore([])
	.on(addTodo, (state, taskText) => [
		...state,
		{
			text: taskText,
			id: nanoid(5),
			checked: false,
		},
	])
	.on(removeTodo, (state, id) => state.filter(task => task.id !== id))
	.on(checkTodo, (state, { id, checked }) =>
		state.map(task => {
			if (task.id === id) {
				task.checked = checked;
			}
			return task;
		}),
	);

export const inputValueStore = createStore('').on(
	inputChange,
	(state, e) => e.target.value,
);
