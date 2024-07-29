import React from 'react';
import PropTypes from 'prop-types';
import 'styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, onToggleFavorite }) => {
  const { id, location, urls, user, isFavorited } = photo;
  return (
    <div className="photo-list__item">
      <img src={urls.regular} alt={`Photo by ${user.username}`} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <div>{user.name}</div>
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
      <PhotoFavButton 
        isInitiallyFavorited={isFavorited}
        onToggleFavorite={() => onToggleFavorite(id)}
      />
    </div>
  );
};

PhotoListItem.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    urls: PropTypes.shape({
      full: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile: PropTypes.string.isRequired,
    }).isRequired,
    isFavorited: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default PhotoListItem;