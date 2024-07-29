import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isFavorited, onToggleFavorite }) => {
  return (
    <div className="photo-fav-button" onClick={onToggleFavorite}>
      <span className="photo-fav-button__icon">{isFavorited ? '❤️' : '🤍'}</span>
    </div>
  );
};

PhotoFavButton.propTypes = {
  isFavorited: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default PhotoFavButton;