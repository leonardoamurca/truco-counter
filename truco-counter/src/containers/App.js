import React, { Component } from 'react';
import logo from './assets/truco_logo.png';
import styles from  './App.module.css';
import Teams from '../containers/Teams/Teams';


class App extends Component {
  state = {
    leftTeam: {
      name: 'Team 01',
      counter: 0,
    },
    rightTeam: {
      name: 'Team 02',
      counter: 0,
    }
  }

  render() {
    return (
      <div className={styles.App}>
        <img src={logo}/>
        <Teams 
        rightCounter={this.state.rightTeam.counter}
        rightName={this.state.rightTeam.name}
        leftCounter={this.state.leftTeam.counter}
        leftName={this.state.leftTeam.name}
        />
      </div>
    );
  }
}

export default App;
