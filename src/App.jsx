/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SearchPane from './components/SearchPane';
import MovieView from './components/MovieView';

import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieView />
        <SearchPane />
      </div>
    );
  }
}

export default App;
