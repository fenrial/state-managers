import React from 'react';
import { useAction, useAtom } from '@reatom/react';
import {
	taskListAtom,
	inputAtom,
	inputChange,
	addTodo,
	checkTodo,
	removeTodo,
} from './actions';
import Task from '../components/Task';
import InputText from '../components/InputText';

const TodoList = () => {
	const taskList = useAtom(taskListAtom);
	const inputValue = useAtom(inputAtom);

	const handleAddTodo = useAction(value => addTodo(value));
	const handleInputChange = useAction(e => inputChange(e.target.value));
	const handleCheckTodo = useAction(payload => checkTodo(payload));
	const handleRemoveTodo = useAction(id => removeTodo(id));

	const completedTasks = taskList.filter(task => task.checked).length;

	return (
		<div className="list">
			<InputText
				inputValue={inputValue}
				handleChange={handleInputChange}
				addTodo={() => handleAddTodo(inputValue)}
			/>
			{taskList.map(task => (
				<Task
					key={task.id}
					task={task}
					removeTodo={handleRemoveTodo}
					onChange={() => {
						handleCheckTodo({
							id: task.id,
							checked: !task.checked,
						});
					}}
				/>
			))}
			<span>Выполненные задачи: {completedTasks}</span>
		</div>
	);
};

export default TodoList;
