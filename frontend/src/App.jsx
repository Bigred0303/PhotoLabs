import React from 'react';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        topics={state.topics} 
        photos={state.photos} 
        setDisplayModal={setPhotoSelected} 
        onToggleFavorite={updateToFavPhotoIds}
      />
      <PhotoDetailsModal 
        isOpen={state.selectedPhoto !== null} 
        onClose={onClosePhotoDetailsModal} 
        photo={state.selectedPhoto} 
      />
    </div>
  );
};

export default App;