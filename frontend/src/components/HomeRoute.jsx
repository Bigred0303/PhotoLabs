import React, { useState } from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const initialPhotos = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
    isFavorited: false,
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
    isFavorited: false,
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
    isFavorited: false,
  },
];

const initialTopics = [
  {
    id: "1",
    slug: "nature",
    label: "Nature",
  },
  {
    id: "2",
    slug: "city",
    label: "City",
  },
  {
    id: "3",
    slug: "animals",
    label: "Animals",
  },
];

const HomeRoute = () => {
  const [photos, setPhotos] = useState(initialPhotos);
  const [topics] = useState(initialTopics);

  const toggleFavorite = (id) => {
    setPhotos(photos.map(photo => 
      photo.id === id ? { ...photo, isFavorited: !photo.isFavorited } : photo
    ));
  };

  const totalLikedPhotos = photos.filter(photo => photo.isFavorited).length;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} totalLikedPhotos={totalLikedPhotos} />
      <PhotoList photos={photos} onToggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;