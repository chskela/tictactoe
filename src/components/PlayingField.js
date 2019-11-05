import React from 'react';
import Cell from './Cell';



class PlayingField extends React.Component {


  render() {
    const cells = [...Array(9)]
      .map((cell, index) => <Cell value={index} key={index} id={index} />);

    return (
      <div className="playingfield">
        {cells}
      </div>

    )
  }

}

export default PlayingField;