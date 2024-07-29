import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose, photo }) => {
  return (
    <div className={`photo-details-modal ${isOpen ? 'photo-details-modal--open' : ''}`}>
      <div className="photo-details-modal__overlay" onClick={onClose}></div>
      <div className="photo-details-modal__content">
        <button className="photo-details-modal__close-button" onClick={onClose}>×</button>
        {photo && (
          <div className="photo-details-modal__images">
            <img src={photo.urls.full} alt={`Photo by ${photo.user.username}`} className="photo-details-modal__image" />
          </div>
        )}
        {photo && (
          <div className="photo-details-modal__top-bar">
            <div className="photo-details-modal__photographer-details">
              <img src={photo.user.profile} alt={`${photo.user.username}'s profile`} className="photo-details-modal__photographer-profile" />
              <div className="photo-details-modal__photographer-info">
                <div>{photo.user.name}</div>
                <div className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

PhotoDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  photo: PropTypes.object,
};

export default PhotoDetailsModal;