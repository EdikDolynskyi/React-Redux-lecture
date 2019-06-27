import React from 'react';

class UserForm extends React.Component {
    render() {
        const data = {
            checked: false,
            name: 'Edik',
            email: 'edik@gmail.com',
            password: '12345'
        };

        return (
            <div>
                <div>
                    <label>Name</label>
                    <input value={data.name} />
                </div>
                <div>
                    <label>Email</label>
                    <input value={data.email} />
                </div>
                <div>
                    <label>Password</label>
                    <input value={data.password} />
                </div>
            </div>
        );
    }
}

export default UserForm;