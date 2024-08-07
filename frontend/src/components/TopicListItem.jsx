import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <div className="topic-list__item" onClick={() => onTopicClick(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

TopicListItem.propTypes = {
  topic: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onTopicClick: PropTypes.func.isRequired,
};

export default TopicListItem;