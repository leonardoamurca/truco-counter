import React from 'react';
import Team from '../../components/Team/Team';
import styles from './Teams.module.css';

const teams = ( props ) => {
  return (
    <div className={styles.Teams}>
      <Team counter={props.leftCounter} name={props.leftName} />
      <Team counter={props.rightCounter} name={props.rightName} />
    </div>
  );
}

export default teams;