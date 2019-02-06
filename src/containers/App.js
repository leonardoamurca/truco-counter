import React, { Component } from 'react';
import logo from './assets/truco_logo.png';
import styles from  './App.module.css';
import Teams from '../components/Teams/Teams';
import Modal from 'react-responsive-modal';


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

  render() {
    const { teams, open } = this.state;
    const { 
      nameChangeHandler, 
      plusHandler, 
      minHandler, 
    } = this;
    
    return (
      <div className={styles.App}>
        <img src={logo} alt="logo"/>
        <Teams 
          teams={teams} 
          nameChange={nameChangeHandler}
          plus={plusHandler}
          min={minHandler}/>
        <Modal open={open} onClose={this.onCloseModal} high>
          <h2>Vencedor</h2>
          <h2>Vencedor</h2>
          <button onClick={this.onCloseModal}>Finalizar partida!</button>
        </Modal>
      </div>
    );
  }
}

export default App;
