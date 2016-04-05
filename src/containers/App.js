import React, { Component } from 'react'
import HeaderContainer from './HeaderContainer'


class App extends Component {
  
  render() {
    return (
      <div className="site-wrap">
        <HeaderContainer />
        {this.props.children}
      </div>
    )
  }
}


export default App