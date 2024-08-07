import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal'; // Ensure the correct import path
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, onToggleFavorite, onTopicClick }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const setDisplayModal = (photo) => {
    console.log("Opening modal for photo:", photo);
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setSelectedPhoto(null);
  };

  const totalLikedPhotos = photos.filter(photo => photo.isFavorited).length;

  console.log("selectedPhoto:", selectedPhoto);

  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={topics} 
        totalLikedPhotos={totalLikedPhotos} 
        onTopicClick={onTopicClick} // Pass the onTopicClick prop
      />
      <PhotoList 
        photos={photos} 
        setDisplayModal={setDisplayModal} 
        onToggleFavorite={onToggleFavorite}
      />
      {selectedPhoto && (
        <PhotoDetailsModal 
          isOpen={!!selectedPhoto} 
          onClose={closeModal} 
          photo={selectedPhoto} 
          onToggleFavorite={onToggleFavorite} // Pass the onToggleFavorite prop
        />
      )}
    </div>
  );
};

HomeRoute.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
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
  onToggleFavorite: PropTypes.func.isRequired,
  onTopicClick: PropTypes.func.isRequired, // Add the prop type for onTopicClick
};

export default HomeRoute;