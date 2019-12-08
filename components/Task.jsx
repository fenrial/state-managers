import React from 'react';
import { observer } from 'mobx-react';

const Task = observer(({ task, removeTodo, onChange }) => {
	const { text, id, checked } = task;
	return (
		<div className="task">
			<input
				type="checkbox"
				name="task"
				checked={checked}
				onChange={onChange}
			/>
			<span className="task__text">{text}</span>
			<button
				className="task__remove-btn"
				onClick={() => {
					removeTodo(id);
				}}
			>
				X
			</button>
		</div>
	);
});

export default Task;
