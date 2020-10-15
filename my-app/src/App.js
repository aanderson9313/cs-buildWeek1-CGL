import React, { Component } from 'react';
import './App.css';
import Game from './Game';


class App extends Component {
  render() {

    return (
      <div className="App">
        <div>
          <h1 className = 'title'>
            Conway's Game of Life!
          </h1>
        </div>
        <Game />
      </div>
    );
  }
}

export default App;
