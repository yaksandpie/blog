import React from 'react';

import hero from '../../images/hero.jpg';
import PostCard from './PostCard';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main>
      <div className={styles.intro}>
        <img className={styles.hero} src={hero} alt='Man waving, creating a waving shadow' />
        <h1 className={styles.hi}>Hi.</h1>
      </div>

      <section className={styles.postCards}>
        <PostCard
          subject='coding'
          title='CSS property ordering, a new age approaches: Layout, Paint, & Composite'
          color={styles.teal}
        />

        <PostCard
          subject='coding'
          title='React Hooks: useEverything()'
          color={styles.orange}
        />

        <PostCard
          subject='coding'
          title='Code Quality and Consistency: Maintainers in ❤️'
          color={styles.red}
        />
      </section>
    </main>
  );
};

export default Home;
