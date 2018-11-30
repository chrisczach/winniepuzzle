import React, { Component } from 'react';
import classes from './tile.module.css';

const Tile = props => {
  const row = Math.floor((props.index - 1) / props.boardSize) + 1;
  const column = (props.index) % (props.boardSize) === 0 ? props.boardSize : (props.index) % (props.boardSize);
  const size = props.size;
  const offSetRow = size - (size * props.imageRow);
  const offSetColumn = size - (size * props.imageColumn);
  const imageSize = size * props.boardSize;
  
  const image = {
    "grid-column": column.toString(),
    "grid-row": row.toString(),
    "background-image": 'url("./img/' + props.image.toString() + '")',
    "background-size": imageSize.toString() + 'px ' + imageSize.toString() + 'px',
    "background-position": offSetColumn.toString() + 'px ' + offSetRow.toString() + 'px'
  };

  const blank = {
    "grid-column": column.toString(),
    "grid-row": row.toString(),
    // "background-image": 'url("./img/' + props.image.toString() + '")',
    // "background-size": imageSize.toString() + 'px ' + imageSize.toString() + 'px',
    // "background-position": offSetColumn.toString() + 'px ' + offSetRow.toString() + 'px'
  };

  return (
    <div onClick={e=> props.clickHandler(props.index, e)}  style={props.imageRow === 'X' ? blank : image} className={classes.tile}>
      imageRow: {props.imageRow}<br/>
      imageColumn: {props.imageColumn}<br/>

    </div>
  )
}


export default Tile