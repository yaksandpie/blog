import React, { Fragment } from 'react';

import { useFetchAPI } from '../../utilities';
import Header from '../Header/Header';
import PostCard from './PostCard';

import hero from '../../images/hero.jpg';
import styles from './Home.module.scss';

import { mockPostCards } from '../../mockData';


const Home = () => {
  const postCards = useFetchAPI('/', null, mockPostCards);

  return (
    <Fragment>
      <Header />

      <main>
        <div className={styles.intro}>
          <img className={styles.hero} src={hero} alt='Man waving, creating a waving shadow' />
          <h1 className={styles.hi}>Hi.</h1>
        </div>

        <section className={styles.postCards}>
          {postCards && postCards.map((card) => (
            <PostCard
              key={card.id}
              subject={card.subject}
              title={card.title}
              color={card.color}
              date={card.date}
            />
          ))}
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
