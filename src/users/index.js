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
			<div className="row">
				<div className="list-group col-10">
					{
						this.props.users.map(user => {
							return (
								<UserItem
									key={user.id}
									id={user.id}
									name={user.name}
									surname={user.surname}
									email={user.email}
									onEdit={this.onEdit}
									onDelete={this.onDelete}
								/>
							);
						})
					}
				</div>
				<div className="col-2">
					<button
						className="btn btn-success"
						onClick={this.onAdd}
						style={{ margin: "5px" }}
					>
						Add user
					</button>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList);