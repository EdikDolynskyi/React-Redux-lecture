import React, { Component } from "react";
import { connect } from 'react-redux';
import UserItem from './UserItem';
import * as actions from './actions';
import { setCurrentUserId, showPage } from '../userPage/actions';

class UserList extends Component {
	constructor(props) {
		super(props);
		this.onEdit = this.onEdit.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onEdit(id) {
		this.props.setCurrentUserId(id);
		this.props.showPage();
	}

	onDelete(id) {
		this.props.deleteUser(id);
	}

	onAdd() {
		this.props.showPage();
	}

	render() {
		return (
			<div>
				<button onClick={this.onAdd}>Add user</button>
				<ul>
					{
						this.props.users.map(user => {
							return (
								<UserItem
									key={ user.id }
									id={ user.id }
									name={ user.name }
									onEdit={ this.onEdit }
									onDelete={ this.onDelete }
								/>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users
	}
};

const mapDispatchToProps = {
	...actions,
	setCurrentUserId,
	showPage
};

export default connect(mapStateToProps,mapDispatchToProps)(UserList);