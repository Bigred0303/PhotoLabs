import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [photoList, setPhotoList] = useState(photos);
  const [topicList] = useState(topics);

  const toggleFavorite = (id) => {
    setPhotoList(photoList.map(photo => 
      photo.id === id ? { ...photo, isFavorited: !photo.isFavorited } : photo
    ));
  };

  return (
    <div className="App">
      <HomeRoute topics={topicList} photos={photoList} onToggleFavorite={toggleFavorite} />
    </div>
  );
};

export default App;