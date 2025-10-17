import React from 'react';
import styles from '../styles/Loader.module.css';

const Loader = () => {
  // Map over an array to avoid repeating the JSX for each box.
  const boxes = [...Array(8).keys()];

  return React.createElement('div', {
    className: styles.loader
  },
    ...boxes.map(i => 
      React.createElement('div', {
        key: i,
        className: `${styles.box} ${styles[`box${i}`]}`
      },
        React.createElement('div', null)
      )
    ),
    React.createElement('div', {
      className: styles.ground
    },
      React.createElement('div', null)
    )
  );
};

export default Loader;