import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import TextField from 'components/TextField';
import addToString from './actions';
import './styles';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
  }

  handleOnUpdate(e) {
    this.props.addToString(e.target.value, true);
  }

  render() {
    return (
      <div className="home-container page-container">
        <div className="home-comp">
          <h1>A React Redux Starter</h1>
        </div>
        <TextField
          onUpdate={this.handleOnUpdate}
          placeholder="Enter some text"
          text={this.props.text}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  addToString: func,
  text: string
};

const mapStateToProps = (state) => {
  return {
    text: state.homeExample.textField
  };
};

export default connect(
  mapStateToProps,
  { addToString }
)(HomePage);
