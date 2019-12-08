import { observable, action, computed } from 'mobx';
import nanoid from 'nanoid';
class Store {
	@observable inputValue = '';
	@observable taskList = [
		{
			text: 'Поспать',
			id: '1',
			checked: true,
		},
		{
			text: 'Покушать',
			id: '2',
			checked: false,
		},
	];

	@action handleChange = e => {
		const { value } = e.target;
		if (value) {
			this.inputValue = e.target.value;
		}
	};

	@action addTodo = () => {
		this.taskList.push({
			text: this.inputValue,
			id: nanoid(5),
			checked: false,
		});
	};

	@action removeTodo = id => {
		this.taskList = this.taskList.filter(task => {
			return task.id !== id;
		});
	};

	@computed get completedTasks() {
		return this.taskList.filter(task => task.checked).length;
	}
}

export default Store;
