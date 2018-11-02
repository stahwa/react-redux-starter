import { UPDATE_TEXT } from 'config/actionTypes';

const initialState = {
  textField: ''
};

function homeExample(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return Object.assign({}, state, {
        textField: action.text
      });
    default:
      return state;
  }
}

export default homeExample;
