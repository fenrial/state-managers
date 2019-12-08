import gql from 'graphql-tag';

export const typeDefs = gql`
	type Task {
		id: String
		text: String
		checked: Boolean
	}

	type appState {
		inputValue: String
		taskList: [Task]
	}
`;
