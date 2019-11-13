import React from 'react'

export default function GameOver(props) {
  return (
    <div>
      {(props.isGameOver && !props.isWin()) ? <h2>Ничья</h2> : null}
    </div>
  );
};