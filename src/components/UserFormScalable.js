import React from 'react';
import TextInput from './inputs/TextInput';
import PasswordInput from './inputs/PasswordInput';
import EmailInput from './inputs/EmailInput';
import UserFormConfig from './config/UserFormConfig';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Edik',
            email: 'edik@gmail.com',
            password: '12345'
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e, keyword) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            [keyword]: value
        });
    }

    getInput(data, { label, type, keyword }) {
        switch(type) {
            case 'text':
                return (
                    <TextInput
                        label={ label }
                        type={ type }
                        text={ data[keyword] }
                        keyword={ keyword }
                        onChange={ this.onChange }
                    />
                );
            case 'email':
                return (
                    <EmailInput
                        label={ label }
                        type={ type }
                        text={ data[keyword] }
                        keyword={ keyword }
                        onChange={ this.onChange }
                    />
                );
            case 'password':
                return (
                    <PasswordInput
                        label={ label }
                        type={ type }
                        text={ data[keyword] }
                        keyword={ keyword }
                        onChange={ this.onChange }
                    />
                );
            default:
                return null;
        }
    }

    render() {
        const data = this.state;

        return (
            <div>
                {
                    UserFormConfig.map(item => this.getInput(data, item))
                }
            </div>
        );
    }
}

export default UserForm;