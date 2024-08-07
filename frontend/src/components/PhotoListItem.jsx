import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, setDisplayModal, onToggleFavorite }) => {
  return (
    <div className="photo-list__item">
      <img 
        src={photo.urls.regular} 
        alt={`Photo by ${photo.user.username}`} 
        className="photo-list__image"
        onClick={() => setDisplayModal(photo)}
      />
      <div className="photo-list__user-details">
        <img 
          src={photo.user.profile} 
          alt={`${photo.user.username}'s profile`} 
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <div>{photo.user.name}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
      <button 
        className="photo-list__favorite-button" 
        onClick={() => onToggleFavorite(photo.id)}
      >
        {photo.isFavorited ? '★' : '☆'}
      </button>
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
  setDisplayModal: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default PhotoListItem;