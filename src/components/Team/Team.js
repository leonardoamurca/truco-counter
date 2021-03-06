import React from 'react';
import styles from './Team.module.css';

const team = ( props ) => {
 
  let classes = [];
  classes.push(styles.buttonContainer);
  return (
    <div className={styles.Team}>
      <p>{props.teamName}</p>
      <p style={{fontSize: '20px'}}>
      Jogos Vencidos: {props.teamGames}
      </p>
      <input type="text" value={props.teamName} onChange={props.changeInput} maxLength={13}/>
      <br/>
      <div className={classes.join(' ')}>
        <button onClick={props.minTwo}>-</button>
        <button onClick={props.plusFour}>+4</button>
        <button onClick={props.plusTwo}>+</button>
        
        
      </div>
      <p>{props.teamPoints}</p>
    </div>
  );
}

export default team;