import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
    render() {
        const props = this.props;
        return (
            <div>
                <label>{ props.label }</label>
                <input
                    value={ props.text }
                    type={ props.type }
                    onChange={ e => props.onChange(e, props.keyword) }
                />
            </div>
        );
    }
}

TextInput.propTypes = {
    text: PropTypes.string
};

export default TextInput;