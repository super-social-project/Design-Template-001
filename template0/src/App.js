import React, { Component } from 'react';
// import Header from './comps/header/header'
// import SubHeader from './comps/subHeader/subheader'
// import Topic from './comps/topic/topic'
import './reset.css';
import './index.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      topics: [1,2,3,4,5,6,7,8,9,10],
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Nope</h1>
      </div>
    );
  }
}

export default App;
