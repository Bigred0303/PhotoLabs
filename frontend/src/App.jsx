import React from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

// App component to manage the overall application
const App = () => {
  // Destructure state and action functions from the useApplicationData hook
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    // Main container for the app
    <div className="App">
      {/* Pass state and action functions as props to the HomeRoute component */}
      <HomeRoute 
        topics={state.topics} 
        photos={state.photos} 
        setDisplayModal={setPhotoSelected} 
        onToggleFavorite={updateToFavPhotoIds}
        onTopicClick={fetchPhotosByTopic}
      />
      {/* Render the PhotoDetailsModal component, passing necessary props */}
      <PhotoDetailsModal 
        isOpen={state.selectedPhoto !== null} 
        onClose={onClosePhotoDetailsModal} 
        photo={state.selectedPhoto} 
      />
    </div>
  );
};

export default App;