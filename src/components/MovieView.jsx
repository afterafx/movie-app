import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import '../css/movie-view.css';

class MovieView extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="movie-view-container">
        <div className="image-overview-container">
          <div className="image-poster">YAY Image!</div>
          <div className="movie-overview">YAY Movie Stats</div>
        </div>
        <div className="top-cast-overview">YAY Top Billed Cast</div>
      </div>
    );
  }
}

MovieView.propTypes = {

};

export default MovieView;
