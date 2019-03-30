import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.searchInputValue);
  }

  handleChange = (event) => {
    this.setState({ searchInputValue: event.target.value });
  }

  render() {
    const { searchInputValue } = this.state;
    return (
      <div>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input
            id="search-box"
            type="text"
            name="search"
            placeholder="Search Movies"
            value={searchInputValue}
            onChange={this.handleChange}
          />
          <button id="search-button" type="submit" value="submit" disabled={searchInputValue === ''}>Submit</button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  // searchInputValue: PropTypes.string.isRequired,
};

export default SearchBar;
