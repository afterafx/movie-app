/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import SearchPane from './components/SearchPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="movie-info-pane" />
        <div className="movie-search-pane">
          <SearchPane />
        </div>
      </div>
    );
  }
}

export default App;
