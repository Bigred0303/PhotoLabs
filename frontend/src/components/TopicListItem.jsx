import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopicListItem.scss';

// TopicListItem component to display individual topic item
const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    // Container for the topic list item with click event to handle topic selection
    <div className="topic-list__item" onClick={() => onTopicClick(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

TopicListItem.propTypes = {
  // Prop types definition for the topic object
  topic: PropTypes.shape({
    id: PropTypes.string.isRequired, // Unique identifier for the topic
    slug: PropTypes.string.isRequired, // URL-friendly identifier for the topic
    title: PropTypes.string.isRequired, // Display title of the topic
  }).isRequired,
  // Function to handle topic click events
  onTopicClick: PropTypes.func.isRequired,
};

export default TopicListItem;