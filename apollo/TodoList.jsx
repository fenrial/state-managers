import React from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import nanoid from 'nanoid';
import Task from '../components/Task';
import InputText from '../components/InputText';

const getAppState = gql`
	query getAppState {
		inputValue
		taskList @client {
			text
			id
			checked
		}
	}
`;

const ADD_TODO = gql`
	mutation addTodo($id: String) {
		addTodo(id: $id) @client
	}
`;

const REMOVE_TODO = gql`
	mutation removeTodo($id: String) {
		removeTodo(id: $id) @client
	}
`;

const CHECK_TODO = gql`
	mutation checkTodo($id: String, $checked: Boolean) {
		checkTodo(id: $id, checked: $checked) @client
	}
`;

const TodoList = () => {
	const client = useApolloClient();
	const { data } = useQuery(getAppState);
	const [addTodo] = useMutation(ADD_TODO);
	const [removeTodo] = useMutation(REMOVE_TODO);
	const [checkTodo] = useMutation(CHECK_TODO);

	const inputChange = e => {
		client.writeData({ data: { inputValue: e.target.value } });
	};
	const { inputValue, taskList } = data;
	const taskCount = taskList.filter(task => task.checked).length;
	return (
		<div className="list">
			<InputText
				inputValue={inputValue}
				handleChange={inputChange}
				addTodo={() => {
					addTodo({
						variables: { id: nanoid(5) },
					});
				}}
			/>
			{taskList.map(task => (
				<Task
					key={task.id}
					task={task}
					removeTodo={id => {
						removeTodo({ variables: { id } });
					}}
					onChange={() => {
						checkTodo({
							variables: {
								id: task.id,
								checked: !task.checked,
							},
						});
					}}
				/>
			))}
			<span>Выполненные задачи: {taskCount}</span>
		</div>
	);
};

export default TodoList;
