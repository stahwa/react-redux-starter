import React from 'react';
import { string, func } from 'prop-types';
import './styles';

/**
 * Renders the label element
 * @param {string} labelText - The label text
 * @returns {ReactElement | null}
 */
function createLabel(labelText) {
  return labelText ? <label htmlFor="inputField">{labelText}</label> : null;
}

/**
 * TextField component
 * @param {object} props
 * @param {string} props.text - The text
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.labelText - Text for the label
 * @return {ReactElement}
 */
const TextField = (props) => {
  const {
    placeholder,
    text,
    labelText,
    onUpdate
  } = props;

  return (
    <div className="text-field-comp">
      {createLabel(labelText)}
      <input
        id="inputField"
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={onUpdate}
      />
    </div>
  );
};

TextField.propTypes = {
  placeholder: string,
  text: string,
  labelText: string,
  onUpdate: func
};

export default TextField;
