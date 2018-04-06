import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const { string } = PropTypes;

/**
 * Reusable TextField
 * @param {object} props
 * @param {string} props.text - the text
 * @param {string} props.placeholder - placeholder text
 * @return {ReactElement}
 */
const TextField = (props) => {

  const { placeholder, text } = props;

  return (
    <div className="text-field-comp">
      <p>Text field for state example</p>
      <input
        type="text"
        onChange={props.onUpdate} 
        value={props.text}
        placeholder={ placeholder }
      />
      <p>{props.text}</p>
    </div>
  )
}

TextField.propTypes = {
  placeholder : string,
	text : string
};

export default TextField