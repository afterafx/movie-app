import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

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
      .then(response => this.setState({ movies: response.data }));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}

SearchPane.propTypes = {

};

export default SearchPane;
