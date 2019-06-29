import React from 'react';

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false
        };
        this.onClick = this.onClick.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.text === this.props.text) {
            return false;
        } else {
            return true;
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.text === 'password') {
            throw new Error('This password is not safe!');
        }
    }

    onClick() {
        this.setState({
            isShown: !this.state.isShown
        });
    }

    render() {
        console.log('component rendered');
        const props = this.props;
        const inputType = this.state.isShown ? 'text' : 'password';

        return (
            <div>
                <label>{ props.label }</label>
                <input
                    value={ props.text }
                    type={ inputType }
                    onChange={ e => props.onChange(e, props.keyword) }
                />
                <button onClick={ this.onClick }>&#x1f441;</button>
            </div>
        );
    }
}

export default PasswordInput;