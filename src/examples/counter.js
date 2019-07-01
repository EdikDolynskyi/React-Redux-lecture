import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

const increment = () => ({
	type: 'INCREMENT'
});

const decrement = () => ({
	type: 'DECREMENT'
});

const logger = store => next => action => {
	console.group(action.type);
	console.info('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	console.groupEnd();
	return result;
};

const store = createStore(counter, applyMiddleware(logger));

class Counter extends React.Component {
	render() {
		const value = store.getState();
		return (
			<div>
				<span>{ value }</span>
				<button onClick={ () => store.dispatch(increment())}>+</button>
				<button onClick={ () => store.dispatch(decrement())}>-</button>
			</div>
		);
	}
};

const render = () => {
	ReactDOM.render(<Counter />, document.getElementById('root'))
};

store.subscribe(render);

render();
