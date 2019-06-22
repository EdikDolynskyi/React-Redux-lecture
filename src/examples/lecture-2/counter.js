import React from 'react';
import ReactDOM from 'react-dom';

const createStore = (reducer, initialState) => {
	const currentReducer = reducer;
	let currentState = initialState;
	let listener = () => {};

	return {
		dispatch(action) {
			currentState = currentReducer(currentState, action);
			listener()
			return action;
		},
		subscribe(newListener) {
			listener = newListener;
		},
		getState() {
			return currentState;
		}
	};
}

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

const store = createStore(counter);

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
