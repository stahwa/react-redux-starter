import { UPDATE_TEXT } from 'constants/actionTypes';


export const addToString = (text) => {
  return {
    type: UPDATE_TEXT,
    text
  }
}
