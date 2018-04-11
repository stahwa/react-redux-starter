import React from 'react';
import { string, func } from 'prop-types';
import styles from './styles';

// const { string, func } = PropTypes;

/**
 * Reusable TextField
 * @param {object} props
 * @param {string} props.text - the text
 * @param {string} props.placeholder - placeholder text
 * @return {ReactElement}
 */
const TextField = (props) => {
  const { placeholder, text, onUpdate } = props;

  return (
    <div className="text-field-comp">
      <p>Text field for state example</p>
      <input
        type="text"
        onChange={onUpdate}
        value={text}
        placeholder={placeholder}
      />
      <p>{text}</p>
    </div>
  );
};

TextField.propTypes = {
  placeholder: string,
  text: string,
  onUpdate: func
};

export default TextField;
