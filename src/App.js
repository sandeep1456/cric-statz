import React, { Component } from 'react';
import './App.css';
import MatchList from './containers/matchList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          Cric Statz
        </div>
        <MatchList />
      </div>
    );
  }
}

export default App;
