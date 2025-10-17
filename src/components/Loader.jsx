import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader = () => {
  // Map over an array to avoid repeating the JSX for each box.
  const boxes = [...Array(8).keys()];

  return (
    <div className={styles.loader}>
      {boxes.map(i => (
        <div key={i} className={`${styles.box} ${styles[`box${i}`]}`}>
          <div></div>
        </div>
      ))}
      <div className={styles.ground}>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;