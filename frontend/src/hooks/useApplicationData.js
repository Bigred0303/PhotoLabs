import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC' // New action
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
    case ACTIONS.SET_PHOTOS_BY_TOPIC:
      return { ...state, photos: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const initialState = {
    photos: [],
    topics: [],
    selectedPhoto: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/api/photos');
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    const fetchTopics = async () => {
      try {
        const response = await fetch('/api/topics');
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchPhotos();
    fetchTopics();
  }, []);

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

  const fetchPhotosByTopic = async (topicId) => {
    try {
      const response = await fetch(`/api/topics/photos/${topicId}`);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: data });
    } catch (error) {
      console.error('Error fetching photos by topic:', error);
    }
  };

  return {
    state,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    fetchPhotosByTopic // Expose the function to handle topic clicks
  };
};

export default useApplicationData;