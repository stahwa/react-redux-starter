
function textField(state = {text:''}, action) {
  switch (action.type) {
    case 'Add_TO_STRING':
      return Object.assign({}, {
        text: action.text
      })
    default:
      return state
  }
}


export { textField }


