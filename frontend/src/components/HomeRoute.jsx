import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos }) => {
  const [favoritePhotoIds, setFavoritePhotoIds] = useState([]);

  const onToggleFavorite = (id) => {
    setFavoritePhotoIds((prevFavoritePhotoIds) =>
      prevFavoritePhotoIds.includes(id)
        ? prevFavoritePhotoIds.filter(photoId => photoId !== id)
        : [...prevFavoritePhotoIds, id]
    );
  };

  const totalLikedPhotos = favoritePhotoIds.length;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} totalLikedPhotos={totalLikedPhotos} />
      <PhotoList photos={photos} favoritePhotoIds={favoritePhotoIds} onToggleFavorite={onToggleFavorite} />
    </div>
  );
};

HomeRoute.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    urls: PropTypes.shape({
      full: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile: PropTypes.string.isRequired,
    }).isRequired,
    isFavorited: PropTypes.bool.isRequired,
  })).isRequired,
};

export default HomeRoute;