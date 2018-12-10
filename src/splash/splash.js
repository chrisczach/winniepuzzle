import React, { Component } from 'react';
import classes from './splash.module.css';

const Splash = props => {
  const levelUp = () => props.setOptions(1, 0);
  const levelDown = () => props.setOptions(-1, 0);
  const sizeUp = () => props.setOptions(0, 1);
  const sizeDown = () => props.setOptions(0, -1);
  return (
    <div
      className={
        !props.currGame ? `${classes.shown} ${classes.splash}` : classes.splash
      }
    >
      <div className={classes.center}>
        <h1>Winnie Shuffle!!</h1>
        {props.win && <h2>You Win!</h2>}

        <h3>Select Level</h3>
        <div>
          <div
            className={`${classes.incButton} ${classes.up}`}
            onClick={levelUp}
          >
            &nbsp;{' '}
          </div>
          <div className={classes.display}>{props.level}</div>
          <div
            className={`${classes.incButton} ${classes.down}`}
            onClick={levelDown}
          >
            &nbsp;{' '}
          </div>
        </div>

        <h3>Select Grid Size</h3>
        <div>
          <div
            className={`${classes.incButton} ${classes.up}`}
            onClick={sizeUp}
          >
            &nbsp;{' '}
          </div>
          <div className={classes.display}>{props.boardSize}</div>
          <div
            className={`${classes.incButton} ${classes.down}`}
            onClick={sizeDown}
          >
            &nbsp;
          </div>
        </div>
        <div onClick={props.newGame} className={classes.start}>
          Start Game &rarr;
        </div>
      </div>
    </div>
  );
};

export default Splash;
