import React, { Component } from 'react';
import { FABButton } from 'react-mdl';

export default class TodoItem extends Component {
	shouldComponentUpdate({ todo, onRemove }) {
		return todo !== this.props.todo || onRemove !== this.props.onRemove;
	}

	remove = () => {
		let { onRemove: remove, todo } = this.props;
		remove(todo);
	};

	render() {
		const { todo } = this.props;
		return (
			<li>
				<FABButton colored raised onClick={this.remove}>&times;</FABButton>
				{ ' ' + todo.text }
			</li>
		);
	}
}
