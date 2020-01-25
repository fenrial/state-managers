import React from 'react';
import { observer } from 'mobx-react';

const InputText = observer(props => {
	const { inputValue, handleChange, addTodo } = props;
	const handleAddTodo = () => {
		if (inputValue) {
			addTodo();
		}
	};
	return (
		<div>
			<input
				className="input"
				type="text"
				value={inputValue}
				onChange={handleChange}
			/>
			<button type="button" onClick={handleAddTodo}>
				Добавить
			</button>
		</div>
	);
});

export default InputText;
