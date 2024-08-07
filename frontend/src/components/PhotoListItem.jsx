import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PhotoListItem.scss';

// PhotoListItem component to display individual photo item
const PhotoListItem = ({ photo, setDisplayModal, onToggleFavorite }) => {
  // Handle click event to display the photo details modal
  const handleClick = () => {
    setDisplayModal(photo);
  };

  return (
    // Container for the photo list item with click event to display modal
    <div className="photo-list__item" onClick={handleClick}>
      <div className="photo-list__image-wrapper">
        <img 
          // Display the photo with URL from the photo object
          src={photo.urls.regular} 
          alt={`Photo by ${photo.user.username}`} 
          className="photo-list__image"
        />
        <button 
          // Favorite button to toggle favorite status
          className="photo-list__favorite-button" 
          onClick={(e) => {
            e.stopPropagation(); // Prevents the modal from opening
            onToggleFavorite(photo.id);
          }}
        >
          {/* Display heart icon based on the isFavorited property */}
          {photo.isFavorited ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="photo-list__user-details">
        <img 
          // Display the photographer's profile picture
          src={photo.user.profile} 
          alt={`${photo.user.username}'s profile`} 
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          {/* Display the photographer's name */}
          <div>{photo.user.name}</div>
          <div className="photo-list__user-location">
            {/* Display the photo's location */}
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

PhotoListItem.propTypes = {
  // Prop types definition for the photo object
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
  // Function to display the photo details modal
  setDisplayModal: PropTypes.func.isRequired,
  // Function to toggle the favorite status of a photo
  onToggleFavorite: PropTypes.func.isRequired,
};

export default PhotoListItem;