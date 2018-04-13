import { UPDATE_TEXT } from 'config/actionTypes';

const addToString = (text) => {
  return {
    type: UPDATE_TEXT,
    text
  };
};

export default addToString;
