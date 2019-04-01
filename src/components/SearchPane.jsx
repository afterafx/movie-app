import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

import '../css/search-pane.css';

class SearchPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount = () => {
    axios
      .get('https://clutter-front-end-interview.herokuapp.com/movies/')
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="search-pane-container">
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}

SearchPane.propTypes = {

};

export default SearchPane;
