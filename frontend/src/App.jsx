import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
};

const App = () => (
  <div className="App">
    <PhotoListItem
      id={sampleDataForPhotoListItem.id}
      location={sampleDataForPhotoListItem.location}
      imageSource={sampleDataForPhotoListItem.imageSource}
      username={sampleDataForPhotoListItem.username}
      profile={sampleDataForPhotoListItem.profile}
    />
  </div>
);

export default App;