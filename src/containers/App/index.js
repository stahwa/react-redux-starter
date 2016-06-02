import React, { Component } from 'react';
import styles from './styles';
import Header from 'components/Header';


class App extends Component {
  
  render() {
    return (
      <div className="site-wrap">
        <Header />
        {this.props.children}
      </div>
    )
  }
}


export default App