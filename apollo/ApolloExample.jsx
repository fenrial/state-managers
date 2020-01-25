import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import TodoList from './TodoList';

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: 'http://localhost:1234/',
});

cache.writeData({
	data: {
		inputValue: '',
		taskList: [
			{
				__typename: 'Task',
				text: 'Поспать',
				id: '1',
				checked: true,
			},
			{
				__typename: 'Task',
				text: 'Покушать',
				id: '2',
				checked: false,
			},
		],
	},
});

const client = new ApolloClient({
	link,
	cache,
	resolvers,
	typeDefs,
});

const ApolloExample = () => {
	return (
		<ApolloProvider client={client}>
			<ApolloHooksProvider client={client}>
				<TodoList />
			</ApolloHooksProvider>
		</ApolloProvider>
	);
};

export default ApolloExample;
