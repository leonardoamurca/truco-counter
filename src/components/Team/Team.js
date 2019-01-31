import React from 'react';
import styles from './Team.module.css';

const team = ( props ) => {
  let classes = [];
  classes.push(styles.buttonContainer);
  return (
    <div className={styles.Team}>
      <p>{props.teamName}</p>
      <input type="text" value={props.teamName} onChange={props.changeInput}/>
      <br/>
      <div className={classes.join(' ')}>
        <button onClick={props.minClick}>-</button>
        <button onClick={props.plusClick}>+</button>
      </div>
      <p>{props.teamPoints}</p>
    </div>
  );
}

export default team;