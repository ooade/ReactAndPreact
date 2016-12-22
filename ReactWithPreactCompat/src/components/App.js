import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Textfield, Card, Layout } from 'react-mdl';
import { Link } from 'react-router';

import bindActions from '../util';
import reducers from '../reducers';
import { addTodo, removeTodo } from '../actions/todo';
import TodoItem from './todo-item';

@connect(reducers, bindActions({ addTodo, removeTodo }))
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = { text: '' };
	}

	addTodos = e => {
		e.preventDefault();
		this.props.addTodo(this.state.text);
		this.setState({ text: '' });
	};

	removeTodo = (todo) => {
		this.props.removeTodo(todo);
	};

	render() {
		const { todos, children } = this.props;

		return (
			<div>
				<Card shadow={2}>
					<form onSubmit={this.addTodos}>
						<Textfield
							floatingLabel
							value={this.state.text}
							onInput={e => this.setState({ text: e.target.value })}
							label='What must be done?'
						/>
					</form>
					<ul>
						{ todos.map(todo => (
							<TodoItem key={todo.id} todo={todo} onRemove={this.removeTodo} />
						)) }
					</ul>
					<p>
					<Link to='/me'> Developed by? </Link>
					</p>
					{ children }
				</Card>
			</div>
		);
	}
}
