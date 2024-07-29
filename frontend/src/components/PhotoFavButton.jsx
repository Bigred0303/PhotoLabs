import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isInitiallyFavorited, onToggleFavorite }) {
  const [isFavorited, setIsFavorited] = useState(isInitiallyFavorited);

  const handleClick = () => {
    setIsFavorited(prevState => !prevState);
    onToggleFavorite();
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon filled={isFavorited} />
      </div>
    </div>
  );
}

PhotoFavButton.propTypes = {
  isInitiallyFavorited: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default PhotoFavButton;