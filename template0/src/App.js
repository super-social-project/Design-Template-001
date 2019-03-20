import React, { Component } from 'react';
import Header from './comps/header/header'
import SubHeader from './comps/subHeader/subheader'
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SubHeader />
      </div>
    );
  }
}

export default App;
