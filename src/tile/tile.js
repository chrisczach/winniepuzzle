import React, { Component } from 'react';
import classes from './tile.module.css';

const Tile = props => {
  const row = Math.floor((props.index - 1) / props.boardSize) + 1;
  const column = (props.index) % (props.boardSize) === 0 ? props.boardSize : (props.index) % (props.boardSize);
  const size = props.size;
  const offSetRow = size - (size * row);
  const offSetColumn = size - (size * column);
  
  const image = {
    "grid-column": column.toString(),
    "grid-row": row.toString(),
    "background-image": 'url("./img/' + props.image.toString() + '")',
    //"background-size": 
  }

  return (
    <div style={image} className={classes.tile}>
      imageRow: {props.imageRow}<br/>
      imageColumn: {props.imageColumn}<br/>
      <br/>
      offSetRow: {offSetRow}<br/>
      offSetColumn: {offSetColumn}<br/>
    </div>
  )
}


export default Tile