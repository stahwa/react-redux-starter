import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './styles';


class MainContainer extends Component {

  render() {
    return (
      <div className="main-container">
        <ReactCSSTransitionGroup
          transitionName="main-page"
          transitionEnterTimeout={1100}
          transitionLeaveTimeout={1100}
          component="div"
          className="page-wrap">
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}


export default MainContainer