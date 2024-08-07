import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose, photo, onToggleFavorite }) => {
  // State to manage favorited status of photos
  const [favoritedPhotos, setFavoritedPhotos] = useState({
    [photo.id]: photo.isFavorited,
    ...Object.keys(photo.similar_photos).reduce((acc, id) => {
      acc[id] = photo.similar_photos[id].isFavorited;
      return acc;
    }, {}),
  });

  // Return null if modal is not open or photo is not available
  if (!isOpen || !photo) {
    return null;
  }

  const similarPhotosArray = Object.values(photo.similar_photos);
  const modalClass = `photo-details-modal ${isOpen ? 'photo-details-modal--open' : ''}`;

  // Handle favorite button click
  const handleFavoriteClick = (photoId) => {
    const newFavoritedPhotos = { ...favoritedPhotos, [photoId]: !favoritedPhotos[photoId] };
    setFavoritedPhotos(newFavoritedPhotos);
    onToggleFavorite(photoId);
  };

  return (
    <>
      <div className="photo-details-modal__overlay" onClick={onClose}></div>
      <div className={modalClass}>
        <div className="photo-details-modal__top-bar">
          <button className="photo-details-modal__close-button" onClick={onClose}>&times;</button>
          <div className="photo-details-modal__photographer-details">
            <img src={photo.user.profile} alt={`${photo.user.username}'s profile`} className="photo-details-modal__photographer-profile" />
            <div>
              <div className="photo-details-modal__photographer-info">{photo.user.name}</div>
              <div className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</div>
            </div>
          </div>
        </div>
        <div className="photo-details-modal__images">
          <div className="photo-details-modal__image-wrapper">
            <img src={photo.urls.full} alt={`Photo by ${photo.user.username}`} className="photo-details-modal__image" />
            <button 
              className="photo-details-modal__favorite-button" 
              onClick={(e) => {
                e.stopPropagation();
                handleFavoriteClick(photo.id);
              }}
            >
              {favoritedPhotos[photo.id] ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
        <div className="photo-details-modal__similar-photos">
          <h3>Similar Photos</h3>
          <div className="photo-details-modal__similar-photos-grid">
            {similarPhotosArray.map((similarPhoto, index) => (
              <div className="photo-details-modal__similar-photo-wrapper" key={index}>
                <img 
                  src={similarPhoto.urls.regular}
                  alt={`Similar photo ${index + 1}`}
                  className="photo-details-modal__similar-photo"
                />
                <div className="photo-details-modal__similar-photo-info">
                  <img 
                    src={similarPhoto.user.profile} 
                    alt={`${similarPhoto.user.username}'s profile`} 
                    className="photo-details-modal__similar-photo-profile"
                  />
                  <div>{similarPhoto.user.name}</div>
                </div>
                <button 
                  className="photo-details-modal__favorite-button" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavoriteClick(similarPhoto.id);
                  }}
                >
                  {favoritedPhotos[similarPhoto.id] ? '❤️' : '🤍'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

PhotoDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
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
    similar_photos: PropTypes.objectOf(
      PropTypes.shape({
        urls: PropTypes.shape({
          regular: PropTypes.string.isRequired,
        }).isRequired,
        user: PropTypes.shape({
          id: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          profile: PropTypes.string.isRequired,
        }).isRequired,
        isFavorited: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;