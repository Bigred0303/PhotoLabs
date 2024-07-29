import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photosData from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [photos, setPhotos] = useState(photosData);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const setDisplayModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
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
        setDisplayModal={setDisplayModal} 
        onToggleFavorite={toggleFavorite}
      />
      <PhotoDetailsModal 
        isOpen={selectedPhoto !== null} 
        onClose={closeModal} 
        photo={selectedPhoto} 
      />
    </div>
  );
};

export default App;