import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostCard.module.scss';

import { lightenColor } from '../../utilities';


const PostCard = ({ subject, color, title }) => {
  const contentStyles = {
    borderBottomColor: color,
    backgroundColor: lightenColor(color, 175),
  };

  const subjectStyles = { backgroundColor: color };

  return (
    <article className={styles.content} style={contentStyles}>
      <section className={styles.subject} style={subjectStyles}>
        {subject}
      </section>

      <h3 className={styles.title}>
        {title}
      </h3>

      <h4 className={styles.date}>
        March 32, 2019
      </h4>
    </article>
  );
};

PostCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  subject: PropTypes.string,
};


export default PostCard;
