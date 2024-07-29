import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photosData from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [photos, setPhotos] = useState(photosData);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);

  const handleSetDisplayModal = (photo) => {
    console.log("Opening modal for photo:", photo);
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setSelectedPhoto(null);
    setDisplayModal(false);
  };

  const toggleFavorite = (photoId) => {
    setPhotos(photos.map(photo => 
      photo.id === photoId ? { ...photo, isFavorited: !photo.isFavorited } : photo
    ));
  };

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        setDisplayModal={handleSetDisplayModal} 
        onToggleFavorite={toggleFavorite}
      />
      {displayModal && (
        <PhotoDetailsModal 
          isOpen={selectedPhoto !== null} 
          onClose={closeModal} 
          photo={selectedPhoto} 
        />
      )}
    </div>
  );
};

export default App;