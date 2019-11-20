import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';
import TextField from 'components/TextField';
import addToString from 'actions/textActions';
import './Home.scss';

/**
 * Home Page
 * @param {object} props
 * @param {string} props.text - The text
 * @param {function} props.addToString - Function to add text
 * @return {ReactElement}
 */
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
  }

  handleOnUpdate(e) {
    const { appendText } = this.props;
    appendText(e.target.value, true);
  }

  render() {
    const { text } = this.props;

    return (
      <div className="home-container page-container">
        <div className="home-comp">
          <h1>A React Redux Starter</h1>
        </div>
        <TextField
          onUpdate={this.handleOnUpdate}
          placeholder="Enter some text"
          text={text}
          labelText="Text field for state example"
        />
        <p>{text}</p>
      </div>
    );
  }
}

HomePage.propTypes = {
  appendText: func,
  text: string
};

const mapStateToProps = (state) => {
  return {
    text: state.textReducer.textField
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appendText: (text) => {
      dispatch(addToString(text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
