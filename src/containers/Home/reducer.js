import { UPDATE_TEXT } from 'config/actionTypes';

const initialState = {
  text: ''
}

function textField(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
}

export default textField
