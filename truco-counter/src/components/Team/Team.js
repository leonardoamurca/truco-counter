import React from 'react';
import styles from './Team.module.css';

const team = ( props ) => {
  let classes = [];
  classes.push(styles.buttonContainer);
  return (
    <div className={styles.Team}>
      <p>{props.name}</p>
      <input type="text" value={props.name}/>
      <br/>
      <div className={classes.join(' ')}>
        <button>-</button>
        <button>+</button>
      </div>
      <p>{props.counter}</p>
    </div>
  );
}

export default team;