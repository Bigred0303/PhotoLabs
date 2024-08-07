import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoFavButton.scss';

// PhotoFavButton component to handle the favorite/unfavorite functionality
const PhotoFavButton = ({ isFavorited, onToggleFavorite }) => {
  return (
    // Container for the favorite button with click event to toggle favorite status
    <div className="photo-fav-button" onClick={onToggleFavorite}>
      {/* Display heart icon based on the isFavorited prop */}
      <span className="photo-fav-button__icon">{isFavorited ? '❤️' : '🤍'}</span>
    </div>
  );
};

PhotoFavButton.propTypes = {
  // Prop to determine if the photo is favorited
  isFavorited: PropTypes.bool.isRequired,
  // Function to toggle the favorite status
  onToggleFavorite: PropTypes.func.isRequired,
};

export default PhotoFavButton;