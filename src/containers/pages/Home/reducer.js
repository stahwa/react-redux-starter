import { UPDATE_TEXT } from 'constants/actionTypes';

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
