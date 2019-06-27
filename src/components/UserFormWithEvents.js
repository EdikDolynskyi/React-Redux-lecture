import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            name: 'Edik',
            email: 'edik@gmail.com',
            password: '12345'
        };
    }

    onChange() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        const data = this.state;

        return (
            <div>
                <div>
                    <label>Checkbox</label>
                    <input type="checkbox" checked={data.checked} onChange={this.onChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input value={data.name} onChange={this.onChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input value={data.email} onChange={this.onChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={data.password} onChange={this.onChange} />
                </div>
            </div>
        );
    }
}

export default UserForm;


//onChange = e => {}