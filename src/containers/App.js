import React, { Component } from 'react';
import logo from './assets/truco_logo.png';
import styles from  './App.module.css';
import Teams from '../components/Teams/Teams';
import Modal from '../components/Modal/Modal';


class App extends Component {
  state = {
    teams: [
      { name: 'Nós', points: 0, games: 0, fall: 0 },
      { name: 'Eles', points: 0, games: 0, fall: 0 },
    ],
    openModal: false,
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
      team.games += 1;
      this.onOpenModal();

    } 
    if(team.points > 12) {
      team.points -= 2;
    }

    const teams = [...this.state.teams];
    teams[index] = team;
    this.setState({ teams: teams });
  }

  plus4Handler = (index) => {
    const team = { ...this.state.teams[index] };
    team.points += 4;

    if (team.points === 12) {
      team.games += 1;
      this.onOpenModal();

    }
    if (team.points > 12) {
      team.points -= 4;
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
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  endGameHandler = () => {
    const teams = [...this.state.teams];
    teams.forEach(team => {
      team.points = 0;
    });

    this.setState({
      teams: teams,
      openModal: false,
    });
  } 

  render() {
    const { teams, openModal } = this.state;
    const { 
      nameChangeHandler, 
      plusHandler, 
      minHandler, 
      onCloseModal,
      endGameHandler,
      plus4Handler,
    } = this;

    let winner = '';
    teams.forEach(team => {
      if(team.points === 12) {
        winner = team.name;
      }
      
    });
    return (
      <div className={styles.App}>
        <img src={logo} alt="logo"/>
        <Teams 
          teams={teams} 
          nameChange={nameChangeHandler}
          plus={plusHandler}
          min={minHandler}
          plus4={plus4Handler} />
        <Modal 
          winner={winner} 
          openModal={openModal} 
          closeModal={onCloseModal} 
          endGame={endGameHandler}/>
      </div>
    );
  }
}

export default App;
