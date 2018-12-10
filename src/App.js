import React, { Component } from 'react';
import Board from './board/board';
import Tile from './tile/tile';
import Splash from './splash/splash';
import classes from './app.module.css';
import * as utility from './utility';

//`./img/${props.item.item}`

const images = [
  { id: 1, item: 'winnie1.jpg' },
  { id: 2, item: 'winnie2.jpg' },
  { id: 3, item: 'winnie3.jpg' },
  { id: 4, item: 'winnie4.jpg' },
  { id: 5, item: 'winnie5.jpg' },
  { id: 6, item: 'winnie6.jpg' },
  { id: 7, item: 'winnie7.jpg' },
  { id: 8, item: 'winnie8.jpg' },
  { id: 9, item: 'winnie9.jpg' },
  { id: 10, item: 'winnie10.jpg' },
  { id: 11, item: 'winnie11.jpg' },
  { id: 12, item: 'winnie12.jpg' }
];

class App extends Component {
  state = {
    level: 1,
    boardSize: 4,
    currGame: false,
    win: false
  };

  setOptions = (incLevel, incBoardSize) => {
    this.setState(state => {
      const level = Math.min(Math.max(state.level + incLevel, 1), 10);
      const boardSize = Math.min(
        Math.max(state.boardSize + incBoardSize, 3),
        10
      );
      return { ...state, level, boardSize };
    });
  };

  setTile = () => {
    this.setState(utility.setTileUtility);
  };

  setBoard = () => {
    this.setState(state => {
      state = utility.setBoardUtility(state);
      state = utility.updateAvailableMovesUtility(state);
      return state;
    });
  };

  moveTile = (index, e) => {
    this.setState(state => {
      state = utility.moveTileUtility(state, index);
      state = utility.checkBoardUtility(state);
      return state;
    });
  };

  reset = () => {
    this.setState({ level: 1, boardSize: 4, currGame: false, win: false });
  };

  checkBoard = () => {
    this.setState(utility.checkBoardUtility);
  };

  newGame = () => {
    this.setState(state => {
      state = utility.newGameUtility(state, images);
      state = utility.setBoardUtility(state);
      state = utility.updateAvailableMovesUtility(state);
      state = utility.randomizeBoardUtility(state);
      state = utility.setTileUtility(state);
      return state;
    });
  };

  componentDidMount() {
    this.setTile();
    window.addEventListener('resize', this.setTile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setTile);
  }

  render() {
    return (
      <div className={classes.main}>
        <div onClick={this.reset} className={classes.reset}>
          Reset
        </div>
        <Splash
          setOptions={this.setOptions}
          level={this.state.level}
          boardSize={this.state.boardSize}
          newGame={this.newGame}
          currGame={this.state.currGame}
          win={this.state.win}
        />
        <Board gridSize={this.state.boardSize}>
          {this.state.board &&
            this.state.board.map((e, i) => (
              <Tile
                clickHandler={this.moveTile}
                {...e}
                image={this.state.image}
                boardSize={this.state.boardSize}
                index={i + 1}
                size={this.state.tileSize}
                lastMove={this.state.lastMove}
              />
            ))}
        </Board>
      </div>
    );
  }
}

export default App;
