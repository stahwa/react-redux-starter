import { UPDATE_TEXT } from 'config/actionTypes';


export const addToString = (text) => {
  return {
    type: UPDATE_TEXT,
    text
  }
}
