import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';

class HomeRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritePhotoIds: [],
      selectedPhoto: null,
    };

    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleFavorite(photoId) {
    console.log("Toggling favorite for photoId:", photoId);
    this.setState(prevState => {
      const favoritePhotoIds = prevState.favoritePhotoIds.includes(photoId)
        ? prevState.favoritePhotoIds.filter(id => id !== photoId)
        : [...prevState.favoritePhotoIds, photoId];
      return { favoritePhotoIds };
    });
  }

  showModal(photo) {
    console.log("Opening modal for photo:", photo);
    this.setState({ selectedPhoto: photo });
  }

  closeModal() {
    console.log("Closing modal");
    this.setState({ selectedPhoto: null });
  }

  render() {
    const { topics, photos } = this.props;
    const { favoritePhotoIds, selectedPhoto } = this.state;
    const totalLikedPhotos = favoritePhotoIds.length;

    console.log("Rendering HomeRoute component");
    console.log("Selected Photo:", selectedPhoto);
    console.log("Modal State:", selectedPhoto !== null);

    return (
      <div className="home-route">
        <TopNavigationBar topics={topics} totalLikedPhotos={totalLikedPhotos} />
        <PhotoList 
          photos={photos} 
          favoritePhotoIds={favoritePhotoIds} 
          onToggleFavorite={this.toggleFavorite} 
          onPhotoClick={this.showModal}
        />
        <PhotoDetailsModal 
          isOpen={selectedPhoto !== null} 
          onClose={this.closeModal} 
          photo={selectedPhoto}
        />
      </div>
    );
  }
}

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
  })).isRequired,
};

export default HomeRoute;