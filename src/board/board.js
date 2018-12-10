import React from 'react';
import classes from './board.module.css';

const Board = props => <div className={classes.board}> {props.children}</div>;

export default Board;
