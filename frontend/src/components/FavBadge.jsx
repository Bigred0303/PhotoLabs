import React from 'react';
import PropTypes from 'prop-types';
import '../styles/FavBadge.scss';

const FavBadge = ({ totalLikedPhotos }) => {
  return (
    <div className="fav-badge">
      <span className="fav-badge__count">{totalLikedPhotos}</span>
      <span className="fav-badge__icon">❤️</span>
    </div>
  );
};

FavBadge.propTypes = {
  totalLikedPhotos: PropTypes.number,
};

FavBadge.defaultProps = {
  totalLikedPhotos: 0,
};

export default FavBadge;