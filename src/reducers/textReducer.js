import { UPDATE_TEXT } from 'config/actionTypes';

const initialState = {
  textField: ''
};

function textReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return { ...state, textField: action.text };
    default:
      return state;
  }
}

export default textReducer;
