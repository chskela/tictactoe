import React from 'react';
import Cell from './Cell';
import Win from './Win';

class PlayingField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 2,
      playingField: ['', '', '', '', '', '', '', '', ''],
      isGameOver: false,
      step: 0,

    };
  }

  isWin = () => {
    const p = this.state.playingField;
    return (p[0] === p[1] && p[0] === p[2] && p[0] !== '') ||
      (p[3] === p[4] && p[3] === p[5] && p[3] !== '') ||
      (p[6] === p[7] && p[6] === p[8] && p[6] !== '') ||
      (p[0] === p[3] && p[0] === p[6] && p[0] !== '') ||
      (p[1] === p[4] && p[1] === p[7] && p[1] !== '') ||
      (p[2] === p[5] && p[2] === p[8] && p[2] !== '') ||
      (p[0] === p[4] && p[0] === p[8] && p[0] !== '') ||
      (p[2] === p[4] && p[2] === p[6] && p[2] !== '');
  };

  handleClick = (id) => {
    if (!this.state.isGameOver) {
      this.setState({
        playingField: this.state.playingField.map((item, index) => {
          return (id === index && item === '') ?
            (this.state.player === 2 ? 'X' : 'O') :
            this.state.playingField[index];
        }),

        step: this.state.step + 1,

        player: (this.state.player === 1 ? 2 : 1)
      });
    };
  };




  componentDidUpdate(prevProps, prevState) {
    if (prevState.step === 8) {
      this.setState({
        isGameOver: !prevState.isGameOver
      });
    };
  };

  render() {
    const cells = [...Array(9)]
      .map((cell, index) =>
        <Cell
          value={this.state.playingField[index]}
          key={index}
          id={index}
          handleClick={this.handleClick}
        />
      );


    return (
      <div>
        <h2>Game Over: {this.state.isGameOver.toString()}</h2>
        <Win isWin={this.isWin} player={this.state.player} />
        {/* <h2>{this.isWin() ? `Победил ${this.state.player} игрок` : null}</h2> */}
        <div className="playingfield">
          {cells}
        </div>
      </div>
    );
  };
};

export default PlayingField;