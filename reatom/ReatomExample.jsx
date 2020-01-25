import React from 'react';
import { createStore } from '@reatom/core';
import { context } from '@reatom/react';
import TodoList from './TodoList';

const ReatomExample = props => {
	const store = createStore();

	return (
		<context.Provider value={store}>
			<TodoList />
		</context.Provider>
	);
};

export default ReatomExample;
