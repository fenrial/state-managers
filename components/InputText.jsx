import React from 'react';
import { observer } from 'mobx-react';

const InputText = observer(props => {
	const { inputValue, handleChange, addTodo } = props;
	return (
		<div>
			<input
				className="input"
				type="text"
				value={inputValue}
				onChange={handleChange}
			/>
			<button type="button" onClick={addTodo}>
				Добавить
			</button>
		</div>
	);
});

export default InputText;
