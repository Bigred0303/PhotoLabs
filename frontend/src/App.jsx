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
    console.log("Opening modal for photo:", photo);
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setSelectedPhoto(null);
  };

  const toggleFavorite = (photoId) => {
    setPhotos(photos.map(photo => 
      photo.id === photoId ? { ...photo, isFavorited: !photo.isFavorited } : photo
    ));
    if (selectedPhoto && selectedPhoto.id === photoId) {
      setSelectedPhoto(prevSelected => ({
        ...prevSelected,
        isFavorited: !prevSelected.isFavorited
      }));
    }
  };

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        setDisplayModal={setDisplayModal} 
        onToggleFavorite={toggleFavorite}
      />
      {selectedPhoto && (
        <PhotoDetailsModal 
          isOpen={selectedPhoto !== null} 
          onClose={closeModal} 
          photo={selectedPhoto} 
          onToggleFavorite={toggleFavorite} // Pass the onToggleFavorite prop
        />
      )}
    </div>
  );
};

export default App;