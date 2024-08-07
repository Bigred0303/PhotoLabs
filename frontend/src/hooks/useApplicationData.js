import { useState } from 'react';
import photosData from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [photos, setPhotos] = useState(photosData);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const setPhotoSelected = (photo) => {
    console.log("Opening modal for photo:", photo);
    setSelectedPhoto(photo);
  };

  const onClosePhotoDetailsModal = () => {
    console.log("Closing modal");
    setSelectedPhoto(null);
  };

  const updateToFavPhotoIds = (photoId) => {
    setPhotos(photos.map(photo => 
      photo.id === photoId ? { ...photo, isFavorited: !photo.isFavorited } : photo
    ));
  };

  return {
    state: { photos, selectedPhoto, topics },
    setPhotoSelected,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds
  };
};

export default useApplicationData;