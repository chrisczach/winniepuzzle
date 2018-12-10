import React from 'react';
import classes from './tile.module.css';

const Tile = props => {
  const row = Math.floor((props.index - 1) / props.boardSize) + 1;
  const column =
    props.index % props.boardSize === 0
      ? props.boardSize
      : props.index % props.boardSize;
  const size = props.size;
  const offSetRow = size - size * props.imageRow;
  const offSetColumn = size - size * props.imageColumn;
  const imageSize = size * props.boardSize;
  const direction = props.lastMove.direction;
  let last = props.lastMove.tileIndex;
  if (direction === 'up') {
    last -= props.boardSize;
  } else if (direction === 'down') {
    last += props.boardSize;
  } else if (direction === 'left') {
    last--;
  } else {
    last++;
  }
  const styleToAdd = last === props.index && direction;
  const image = {
    'grid-column': column.toString(),
    'grid-row': row.toString(),
    'background-image': 'url("./img/' + props.image.toString() + '")',
    'background-size':
      imageSize.toString() + 'px ' + imageSize.toString() + 'px',
    'background-position':
      offSetColumn.toString() + 'px ' + offSetRow.toString() + 'px'
  };
  const blank = {
    'grid-column': column.toString(),
    'grid-row': row.toString()
  };
  return (
    <div
      onClick={e => props.clickHandler(props.index, e)}
      style={props.imageRow === 'X' ? blank : image}
      className={`${classes.tile} ${classes[styleToAdd]}`}
    />
  );
};

export default Tile;
