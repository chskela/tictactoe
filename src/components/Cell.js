import React from 'react';

export default function Cell(props) {
  return (
    <div className="cell" id={props.id}>{props.value}</div>
  );
};