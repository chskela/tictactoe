import React from 'react';

export default function Win(props) {
  return (
    <div>
      {props.isWin() ? <h2>Победил {props.player} игрок </h2> : null}
    </div>
  );
};