import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose, photo }) => {
  console.log('PhotoDetailsModal isOpen:', isOpen);
  const modalClass = `photo-details-modal ${isOpen ? 'photo-details-modal--open' : ''}`;
  console.log('PhotoDetailsModal className:', modalClass);

  return (
    <>
      {isOpen && <div className="photo-details-modal__overlay" onClick={onClose}></div>}
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
          <img src={photo.urls.full} alt={`Photo by ${photo.user.username}`} className="photo-details-modal__image" />
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
  }).isRequired,
};

export default PhotoDetailsModal;