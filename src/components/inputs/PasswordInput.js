import React from 'react';

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log('show');
    }

    render() {
        const props = this.props;

        return (
            <div>
                <label>{ props.label }</label>
                <input
                    value={ props.text }
                    type={ 'password' }
                    onChange={ e => props.onChange(e, props.keyword) }
                />
                <button onClick={ this.onClick }>&#x1f441;</button>
            </div>
        );
    }
}

export default PasswordInput;