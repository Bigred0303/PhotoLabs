import React from 'react';
import PropTypes from 'prop-types';
import 'styles/PhotoListItem.scss';

const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;
  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <div>{username}</div>
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
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
    imageSource: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
  }).isRequired,
};

export default PhotoListItem;