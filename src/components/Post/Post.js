import React, { Fragment } from 'react';

import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { mockPostCards } from '../../mockData';

import styles from './Post.module.scss';

const Post = ({ match }) => {
  const post = mockPostCards.find((post) => {
    return parseInt(match.params.id, 10) === post.id;
  });
  const contentStyles = { borderTopColor: post.color };
  const metaStyles = { borderBottomdColor: post.color };

  return (
    <Fragment>
      <Header />

      <main className={styles.content} style={contentStyles}>
        <div className={styles.meta} style={metaStyles}>
          <h1 className={styles.title}>{post.title}</h1>
          <h4 className={styles.date}>{post.date}</h4>
          <h4 className={styles.author}>by {post.author}</h4>
        </div>

        <p className={styles.text}>{post.fullText}</p>
      </main>
    </Fragment>
  );
};

Post.propTypes = {
  match: PropTypes.object,
};


export default Post;
