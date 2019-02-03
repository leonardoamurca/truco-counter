import React, { Component } from 'react';
import logo from './assets/truco_logo.png';
import styles from  './App.module.css';
import Teams from '../components/Teams/Teams';


class App extends Component {
  state = {
    teams: [
      { name: 'Team 01', points: 0, wins: 0 },
      { name: 'Team 02', points: 0, wins: 0 },
    ],
  }

  nameChangeHandler = (event, index) => {
    const team = { ...this.state.teams[index] };
    team.name = event.target.value;

    const teams = [...this.state.teams];
    teams[index] = team;
    this.setState({ teams: teams });
  }

  plusHandler = (index) => {
    const team = { ...this.state.teams[index] };
    team.points += 2;

    const teams = [...this.state.teams];
    teams[index] = team;
    this.setState({ teams: teams });
  }

  minHandler = (index) => {
    const team = { ...this.state.teams[index] };
    team.points -= 2;

    const teams = [...this.state.teams];
    teams[index] = team;
    this.setState({ teams: teams });
  }

  zeroHandler(index) {
    const team = { ...this.state.teams[index] };
    team.points = 0;

    const teams = [...this.state.teams];
    teams[index] = team;
    this.setState({ teams: teams });
  }

  winHandler(index) {
    const team = { ...this.state.teams[index] };
    team.wins += 1;

    const teams = [...this.state.teams];
    teams[index] = team;
    this.setState({ teams: teams })
  }

  render() {
    const { teams } = this.state;
    const { 
      nameChangeHandler, 
      plusHandler, 
      minHandler, 
      winHandler 
    } = this;
    
    teams.forEach(team => {
      if(team.points < 0) {
        this.zeroHandler(teams.indexOf(team));
      }
    })

    return (
      <div className={styles.App}>
        <img src={logo} alt="logo"/>
        <Teams 
          teams={teams} 
          nameChange={nameChangeHandler}
          plus={plusHandler}
          min={minHandler}
          win={winHandler}/>
      </div>
    );
  }
}

export default App;
