import React, { Component } from 'react';
import logo from './assets/truco_logo.png';
import styles from  './App.module.css';
import Teams from '../components/Teams/Teams';


class App extends Component {
  state = {
    teams: [
      { name: 'Team 01', points: 0 },
      { name: 'Team 02', points: 0 },
    ]
  }

  nameChangeHandler = (event, index) => {
    const team = { ...this.state.teams[index] }; // Is the person we want to update
    team.name = event.target.value;

    const teams = [...this.state.teams];
    teams[index] = team;
    this.setState({ teams: teams });

  }

  plusLeftHandler = () => {
    
  }

  minLeftHandler = () => {
    
  }

  plusRightHandler = () => {
    
  }

  minRightHandler = () => {
   
  }

  

  render() {
    
    return (
      <div className={styles.App}>
        <img src={logo} alt="logo"/>
        <Teams teams={this.state.teams} nameChange={this.nameChangeHandler}/>
      </div>
    );
  }
}

export default App;
