import React from 'react';
import TextInput from './inputs/TextInput';

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

    render() {
        const data = this.state;

        return (
            <div>
                <TextInput
                    label={ 'Name' }
                    type={ 'text' }
                    text={ data.name }
                    keyword={ 'name' }
                    onChange={ this.onChange }
                />
                <TextInput
                    label={ 'Email' }
                    type={ 'text' }
                    text={ data.email }
                    keyword={ 'email' }
                    onChange={ this.onChange }
                />
                <TextInput
                    label={ 'Password' }
                    type={ 'text' }
                    text={ data.password }
                    keyword={ 'password' }
                    onChange={ this.onChange }
                />
            </div>
        );
    }
}

export default UserForm;