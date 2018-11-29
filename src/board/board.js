import React, { Component } from 'react';
import classes from './board.module.css';

const Board = (props) => {
  const grid = {
    "grid-template-columns": 'repeat(' + props.gridSize + ', 1fr)',
    "grid-template-rows": 'repeat(' + props.gridSize + ', 1fr)'
  };
  return (
    <div style={grid} className={classes.board}>
    {props.children}
    </div>
)
}

export default Board