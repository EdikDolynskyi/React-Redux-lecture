import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from './actions';
import { addUser, updateUser } from '../users/actions';

class UserPage extends Component {
	constructor(props) {
        super(props);
        this.state = this.getDefaultUserData();
        this.onCancel = this.onCancel.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.userId !== this.props.userId){
            const user = this.props.users.find(user => user.id === nextProps.userId);
            this.setState(user);
        }
    }

    onCancel() {
        this.props.dropCurrentUserId();
        this.props.hidePage();
        this.setState(this.getDefaultUserData());
    }

    onSave() {
        if (this.props.userId) {
            this.props.updateUser(this.props.userId, this.state);
        } else {
            this.props.addUser(this.state);
        }
        this.props.dropCurrentUserId();
        this.props.hidePage();
        this.setState(this.getDefaultUserData());
    }

    onChangeData(e, keyword) {
        const value = e.target.value;
        this.setState(
            {
                ...this.state,
                [keyword]: value
            }
        );
    }

    getDefaultUserData() {
        return {
            name: ''
        };
    }
    
    getUserPageContent() {
        const userData = this.state;
        
        return (
            <div>
                <input value={ userData.name } onChange={(e) => this.onChangeData(e, 'name')}></input>
                <button onClick={ this.onCancel }>Cancel</button>
                <button onClick={ this.onSave }>Save</button>
            </div>
        ); 
    }

	render() {
        const isShown = this.props.isShown;
		return isShown ? this.getUserPageContent() : null;
	}
}

const mapStateToProps = (state) => {
	return {
        users: state.users,
        isShown: state.userPage.isShown,
        userId: state.userPage.userId
	}
};

const mapDispatchToProps = {
    ...actions,
    addUser,
    updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);