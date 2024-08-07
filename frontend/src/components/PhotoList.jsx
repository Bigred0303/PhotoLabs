import React from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

// PhotoList component to display a list of photos
const PhotoList = ({ photos, setDisplayModal, onToggleFavorite }) => {

  return (
    // Container for the photo list
    <div className="photo-list">
      {photos.map(photo => (
        // Render a PhotoListItem for each photo
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          setDisplayModal={setDisplayModal} 
          onToggleFavorite={onToggleFavorite} 
        />
      ))}
    </div>
  );
};

PhotoList.propTypes = {
  // Array of photo objects
  photos: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  // Function to display the photo details modal
  setDisplayModal: PropTypes.func.isRequired,
  // Function to toggle the favorite status of a photo
  onToggleFavorite: PropTypes.func.isRequired,
};

export default PhotoList;