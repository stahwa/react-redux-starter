import React, { Component } from 'react';
import styles from './styles';
 

class AboutPage extends Component {

  render() {
    return (
      <div className="about-container page-container">
        <div className="about-comp">
          <h1>About</h1>
          <p>This starter uses: React, Redux, React Router, ES6, Webpack and SASS.</p>
        </div>
      </div>
    )
  }
}


export default AboutPage