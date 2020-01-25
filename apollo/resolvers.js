import gql from 'graphql-tag';

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

const getTaskList = gql`
	query getTaskList {
		taskList @client {
			text
			id
			checked
		}
	}
`;

export const resolvers = {
	Mutation: {
		addTodo: (_, { id }, { cache }) => {
			const { taskList, inputValue } = cache.readQuery({
				query: getAppState,
			});
			const task = {
				__typename: 'Task',
				id,
				text: inputValue,
				checked: false,
			};
			const data = {
				taskList: [...taskList, task],
			};
			cache.writeQuery({ query: getTaskList, data });
			return data.taskList;
		},
		removeTodo: (_, { id }, { cache }) => {
			const { taskList } = cache.readQuery({
				query: getTaskList,
			});

			const data = {
				taskList: taskList.filter(task => task.id !== id),
			};
			cache.writeQuery({ query: getTaskList, data });
			return data.taskList;
		},
		checkTodo: (_, { id, checked }, { cache }) => {
			const { taskList } = cache.readQuery({
				query: getTaskList,
			});

			const data = {
				taskList: taskList.map(task => {
					if (task.id === id) {
						task.checked = checked;
					}
					return task;
				}),
			};
			cache.writeQuery({ query: getTaskList, data });
			return data.taskList;
		},
	},
};
