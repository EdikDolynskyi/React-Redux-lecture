import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Edik',
            email: 'edik@gmail.com',
            password: '12345'
        };
    }

    onChange(e, keyword) {
        const value = e.target.value;
        this.setState({
            [keyword]: value
        });
    }

    render() {
        const data = this.state;

        return (
            <div>
                <div>
                    <label>Name</label>
                    <input value={data.name} onChange={(e) => this.onChange(e, 'name')} />
                </div>
                <div>
                    <label>Email</label>
                    <input value={data.email} onChange={(e) => this.onChange(e, 'email')} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={data.password} onChange={(e) => this.onChange(e, 'password')} />
                </div>
            </div>
        );
    }
}

export default UserForm;


//onChange = e => {}