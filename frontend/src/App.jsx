import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItems = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
  },
  {
    id: "2",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
  },
  {
    id: "3",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
  },
];

const App = () => (
  <div className="App">
    {sampleDataForPhotoListItems.map(photo => (
      <PhotoListItem key={photo.id} photo={photo} />
    ))}
  </div>
);

export default App;