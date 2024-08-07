import { useReducer } from 'react';
import photosData from '../mocks/photos';
import topics from '../mocks/topics';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        photos: state.photos.map(photo =>
          photo.id === action.payload ? { ...photo, isFavorited: true } : photo
        )
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        photos: state.photos.map(photo =>
          photo.id === action.payload ? { ...photo, isFavorited: false } : photo
        )
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, selectedPhoto: null };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const initialState = {
    photos: photosData,
    topics: topics,
    selectedPhoto: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setPhotoSelected = (photo) => {
    console.log("Opening modal for photo:", photo);
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    console.log("Closing modal");
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const updateToFavPhotoIds = (photoId) => {
    const photo = state.photos.find(photo => photo.id === photoId);
    if (photo.isFavorited) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  return {
    state,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds
  };
};

export default useApplicationData;