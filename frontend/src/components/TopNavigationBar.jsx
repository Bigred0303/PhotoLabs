import React from 'react';
import PropTypes from 'prop-types';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, totalLikedPhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {totalLikedPhotos > 0 && <FavBadge totalLikedPhotos={totalLikedPhotos} />}
    </div>
  );
};

TopNavigationBar.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  totalLikedPhotos: PropTypes.number.isRequired,
};

export default TopNavigationBar;