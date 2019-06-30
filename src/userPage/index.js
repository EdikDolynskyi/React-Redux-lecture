import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from './actions';
import { addUser, updateUser } from '../users/actions';
import TextInput from '../shared/inputs/text/TextInput';
import PasswordInput from '../shared/inputs/password/PasswordInput';
import EmailInput from '../shared/inputs/email/EmailInput';
import userFormConfig from '../shared/config/userFormConfig';
import defaultUserConfig from '../shared/config/defaultUserConfig';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultUserData();
        this.onCancel = this.onCancel.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userId !== this.props.userId) {
            const user = this.props.users.find(user => user.id === nextProps.userId);
            this.setState(user);
        }
    }

    /*
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.userId !== prevState.userId) {
            const user = nextProps.users.find(user => user.id === nextProps.userId);
            return {
                ...user
            };
        }
    }
    */

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
            ...defaultUserConfig
        };
    }

    getInput(data, { label, type, keyword }) {
        switch (type) {
            case 'text':
                return (
                    <TextInput
                        label={label}
                        type={type}
                        text={data[keyword]}
                        keyword={keyword}
                        onChange={this.onChangeData}
                    />
                );
            case 'email':
                return (
                    <EmailInput
                        label={label}
                        type={type}
                        text={data[keyword]}
                        keyword={keyword}
                        ref="email"
                        onChange={this.onChangeData}
                    />
                );
            case 'password':
                return (
                    <PasswordInput
                        label={label}
                        type={type}
                        text={data[keyword]}
                        keyword={keyword}
                        onChange={this.onChangeData}
                    />
                );
            default:
                return null;
        }
    }

    getUserPageContent() {
        const data = this.state;
        // const isValid = this.refs.email ? this.refs.email.getValidationStatus() : true;

        return (
            <div className="modal" style={{ display: "block" }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ padding: "5px" }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Add user</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onCancel}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                userFormConfig.map(item => this.getInput(data, item))
                            }
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={this.onCancel}>Cancel</button>
                            <button className="btn btn-primary" onClick={this.onSave}>Save</button>
                        </div>
                    </div>
                </div>
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