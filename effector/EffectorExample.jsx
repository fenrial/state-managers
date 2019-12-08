import React from 'react';
import Task from '../components/Task';
import { useStore } from 'effector-react';
import { taskListStore, inputValueStore } from './store';
import { addTodo, removeTodo, inputChange, checkTodo } from './events';
import InputText from '../components/InputText';

const EffectorExample = props => {
	const taskList = useStore(taskListStore);
	const inputValue = useStore(inputValueStore);
	const completedTasks = taskList.filter(task => task.checked).length;
	return (
		<div className="list">
			<InputText
				inputValue={inputValue}
				handleChange={inputChange}
				addTodo={() => {
					if (inputValue) {
						addTodo(inputValue);
					}
				}}
			/>
			{taskList.map(task => (
				<Task
					key={task.id}
					task={task}
					removeTodo={removeTodo}
					onChange={() => {
						checkTodo({ id: task.id, checked: !task.checked });
					}}
				/>
			))}
			<span>Выполненные задачи: {completedTasks}</span>
		</div>
	);
};

export default EffectorExample;
