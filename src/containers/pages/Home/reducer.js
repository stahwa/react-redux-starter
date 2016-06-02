
function textField(state = {text:''}, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return Object.assign({}, {
        text: action.text
      })
    default:
      return state
  }
}


export default textField


