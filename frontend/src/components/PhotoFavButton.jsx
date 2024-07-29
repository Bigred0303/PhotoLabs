import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isInitiallyFavorited, onToggleFavorite }) => {
  const [isFavorited, setIsFavorited] = useState(isInitiallyFavorited);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
    onToggleFavorite();
  };

  return (
    <div className="photo-fav-button" onClick={handleClick}>
      <span className="photo-fav-button__icon">{isFavorited ? '❤️' : '🤍'}</span>
    </div>
  );
};

PhotoFavButton.propTypes = {
  isInitiallyFavorited: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default PhotoFavButton;