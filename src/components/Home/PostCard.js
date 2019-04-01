import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PostCard.module.scss';


const PostCard = ({ subject, color, title, date, id }) => {
  const subjectStyles = { backgroundColor: color };
  const linkStyles = { borderBottomColor: color };

  return (
    <article className={styles.content}>
      <Link to={`/post/${id}`} className={styles.link} style={linkStyles}>
        <section className={styles.subject} style={subjectStyles}>
          {subject}
        </section>

        <h4 className={styles.date}>
          {date}
        </h4>

        <h3 className={styles.title}>
          {title}
        </h3>
      </Link>
    </article>
  );
};

PostCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  subject: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
};


export default PostCard;
