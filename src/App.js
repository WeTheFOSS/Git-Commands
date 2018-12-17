import React, { Component } from 'react';
import './style.scss';

// Component import
import Header from './Components/Header';
import GitDescription from './Components/Card/GitDescription';
import Credits from './Components/Credits';
import Footer from './Components/Footer';

class Git extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <GitDescription />
        <Credits />
        <Footer />
      </div>
    );
  }
}

export default Git;
