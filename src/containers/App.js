import React, { Component } from 'react';
import logo from './assets/truco_logo.png';
import styles from  './App.module.css';
import Teams from '../components/Teams/Teams';
import Modal from '../components/Modal/Modal';


class App extends Component {
  state = {
    teams: [
      { name: 'Team 01', points: 0, wins: 0 },
      { name: 'Team 02', points: 0, wins: 0 },
    ],
    open: false,
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

    if(team.points  === 12) {
      team.wins += 1;
      this.onOpenModal();

    } 
    if(team.points > 12) {
      team.points -= 2;
    }

    const teams = [...this.state.teams];
    teams[index] = team;
    this.setState({ teams: teams });
  }

  minHandler = (index) => {
    const team = { ...this.state.teams[index] };
    team.points -= 2;

    if (team.points < 0) {
      team.points += 2;
    }

    const teams = [...this.state.teams];
    teams[index] = team;
    this.setState({ teams: teams });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  endGameHandler = () => {
    const teams = [...this.state.teams];
    teams.forEach(team => {
      team.points = 0;
    });

    this.setState({
      teams: teams,
      open: false,
    });
  } 

  render() {
    const { teams, open } = this.state;
    const { 
      nameChangeHandler, 
      plusHandler, 
      minHandler, 
      onCloseModal,
      endGameHandler,
    } = this;

    let winner = '';
    teams.forEach(team => {
      if(team.points === 12) {
        winner = team.name;
      }
    })
    return (
      <div className={styles.App}>
        <img src={logo} alt="logo"/>
        <Teams 
          teams={teams} 
          nameChange={nameChangeHandler}
          plus={plusHandler}
          min={minHandler}/>
        <Modal winner={winner} openModal={open} closeModal={onCloseModal} endGame={endGameHandler}/>
      </div>
    );
  }
}

export default App;
