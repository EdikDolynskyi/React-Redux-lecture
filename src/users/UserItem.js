import React, { Component } from "react";

export default class UserItem extends Component {
    render() {
        const { id, name } = this.props;
		return (
            <div>
                <span>{ name }</span>
                <button onClick={(e) => this.props.onEdit(id)}> Edit </button>
                <button onClick={(e) => this.props.onDelete(id)}> Delete </button>
            </div>
        );
	}
};