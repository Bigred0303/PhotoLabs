import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
import photosData from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [photos, setPhotos] = useState(photosData);

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
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;