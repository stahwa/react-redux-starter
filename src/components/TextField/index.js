import React from 'react';
import styles from './styles';


const TextField = (props) => {

  return (
    <div className="text-field-comp">
      <p>Text field for state example</p>
      <input
        type="text"
        onChange={props.onUpdate} 
        value={props.text}
        placeholder="Enter some text"
      />
      <p>{props.text}</p>
    </div>
  )
}


export default TextField