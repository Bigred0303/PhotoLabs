import React, { useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const HomeRoute = () => {
  const [photoList, setPhotoList] = useState(photos);
  const [topicList] = useState(topics);

  const toggleFavorite = (id) => {
    setPhotoList(photoList.map(photo => 
      photo.id === id ? { ...photo, isFavorited: !photo.isFavorited } : photo
    ));
  };

  const totalLikedPhotos = photoList.filter(photo => photo.isFavorited).length;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topicList} totalLikedPhotos={totalLikedPhotos} />
      <PhotoList photos={photoList} onToggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;