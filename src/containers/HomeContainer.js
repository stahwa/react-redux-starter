import React, { Component } from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import { addToString } from '../actions/'
import TextField from '../components/TextField'
 

class HomeContainer extends Component {

  constructor(props) {
    super(props)
    this.handleOnUpdate = this.handleOnUpdate.bind(this)
  }

  handleOnUpdate(e) {
    this.props.addToString(e.target.value, true);
  }

  render() {
    return (
      <div className="home-container page-container">
        <Home />
        <TextField onUpdate={this.handleOnUpdate} text={this.props.text} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.textField.text
  }
}


export default connect(
  mapStateToProps,
  { addToString }
)(HomeContainer)