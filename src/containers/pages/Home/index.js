import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { addToString } from './actions';
import TextField from 'components/TextField';


class HomePage extends Component {

  constructor(props) {
    super(props)
    this.handleOnUpdate = this.handleOnUpdate.bind(this)
  }

  handleOnUpdate(e) {
    this.props.addToString(e.target.value, true);
  }

  render() {
    console.log(process.env.NODE_ENV)
    return (
      <div className="home-container page-container">
        <div className="home-comp">
          <h1>A React Redux Starter</h1>
        </div>
        <TextField onUpdate={this.handleOnUpdate} text={this.props.text} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mstp home state', state)
  return {
    text: state.rootReducer.textField.text
  }
}


export default connect(
  mapStateToProps,
  { addToString }
)(HomePage)