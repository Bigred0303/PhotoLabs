import React from 'react';
import PropTypes from 'prop-types';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

// TopNavigationBar component to display the top navigation bar
const TopNavigationBar = ({ topics, totalLikedPhotos, onTopicClick }) => {
  return (
    // Container for the top navigation bar
    <div className="top-nav-bar">
      {/* Logo for the application */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Render the TopicList component with the list of topics and the click handler */}
      <TopicList topics={topics} onTopicClick={onTopicClick} />
      {/* Render the FavBadge component if there are liked photos */}
      {totalLikedPhotos > 0 && <FavBadge totalLikedPhotos={totalLikedPhotos} />}
    </div>
  );
};

TopNavigationBar.propTypes = {
  // Array of topic objects
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  // Number of liked photos
  totalLikedPhotos: PropTypes.number.isRequired,
  // Function to handle topic click events
  onTopicClick: PropTypes.func.isRequired,
};

export default TopNavigationBar;