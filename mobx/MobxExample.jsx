import React, { Component } from 'react';
import Task from '../components/Task';
import { observer } from 'mobx-react';
import InputText from '../components/InputText';

@observer
class MobxExample extends Component {
	render() {
		const {
			taskList,
			inputValue,
			handleChange,
			addTodo,
			removeTodo,
			completedTasks,
		} = this.props.store;

		return (
			<div className="list">
				<InputText
					inputValue={inputValue}
					handleChange={handleChange}
					addTodo={addTodo}
				/>
				{taskList.map(task => (
					<Task
						key={task.id}
						task={task}
						removeTodo={removeTodo}
						onChange={() => (task.checked = !task.checked)}
					/>
				))}
				<span>Выполненные задачи: {completedTasks}</span>
			</div>
		);
	}
}

export default MobxExample;
