import React from 'react';

export default function Cell(props) {
  return (
    <div className="cell" id={props.id} onClick={() => props.handleClick(props)}>{props.value}</div>
  );
};