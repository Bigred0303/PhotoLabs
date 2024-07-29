import React from 'react';
import PropTypes from 'prop-types';

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list-item">
      <img src={profile} alt={`${username}'s profile`} className="profile-pic"/>
      <div className="photo-details">
        <h2>{username}</h2>
        <p>{location.city}, {location.country}</p>
        <img src={imageSource} alt={`Photo by ${username}`} className="photo"/>
      </div>
    </div>
  );
};

PhotoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  imageSource: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
};

export default PhotoListItem;