import React from 'react';
import ReactDOM from 'react-dom';
import MobxExample from './mobx/MobxExample';
import Store from './mobx/store';
import EffectorExample from './effector/EffectorExample';
import ApolloExample from './apollo/ApolloExample';
import ReatomExample from './reatom/ReatomExample';

class App extends React.Component {
	render() {
		return (
			<div className="todo">
				<div className="todo__item">
					Mobx
					<MobxExample store={this.props.store} />
				</div>
				<div className="todo__item">
					Effector
					<EffectorExample />
				</div>
				<div className="todo__item">
					Apollo
					<ApolloExample />
				</div>
				<div className="todo__item">
					Reatom
					<ReatomExample />
				</div>
			</div>
		);
	}
}

const store = new Store();

ReactDOM.render(<App store={store} />, document.getElementById('app'));
