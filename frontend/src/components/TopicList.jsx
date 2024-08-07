import React from 'react';
import PropTypes from 'prop-types';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

// TopicList component to display a list of topics
const TopicList = ({ topics, onTopicClick }) => {
  return (
    // Container for the topic list
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        // Render a TopicListItem for each topic
        <TopicListItem key={topic.id} topic={topic} onTopicClick={onTopicClick} />
      ))}
    </div>
  );
};

TopicList.propTypes = {
  // Array of topic objects
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  // Function to handle topic click events
  onTopicClick: PropTypes.func.isRequired,
};

export default TopicList;