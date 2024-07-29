import React, { useState } from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const initialPhotos = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    isFavorited: false,
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    profile: `${process.env.PUBLIC_URL}/profile-2.jpg`,
    imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    username: "Jane Doe",
    isFavorited: false,
  },
  {
    id: "3",
    location: {
      city: "Vancouver",
      country: "Canada",
    },
    profile: `${process.env.PUBLIC_URL}/profile-3.jpg`,
    imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    username: "John Smith",
    isFavorited: false,
  },
];

const App = () => {
  const [photos, setPhotos] = useState(initialPhotos);

  const toggleFavorite = (id) => {
    setPhotos(photos.map(photo => 
      photo.id === id ? { ...photo, isFavorited: !photo.isFavorited } : photo
    ));
  };

  return (
    <div className="App">
      {photos.map(photo => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default App;