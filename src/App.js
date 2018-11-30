import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './board/board';
import Tile from './tile/tile';

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

const updateAvailableMovesUtility = (state) => {
    const currIndex = state.board.findIndex(e=> e.imageRow === 'X');
    const possibleMoves = [];
    if ((currIndex + 1 )% state.boardSize !== 0) possibleMoves.push(currIndex + 1)
    if (currIndex % state.boardSize !== 0) possibleMoves.push(currIndex - 1)
    if (currIndex - state.boardSize >= 0) possibleMoves.push(currIndex - state.boardSize)
    if (currIndex + state.boardSize < state.board.length) possibleMoves.push(currIndex + state.boardSize)
    return {...state, possibleMoves}
}

const moveTileUtility = (state, index) => {
  
  const currIndex = state.board.findIndex(e => e.imageRow === 'X')
  if (state.possibleMoves.indexOf(index - 1) === -1) return
  const board = state.board;
  [board[index - 1], board[currIndex]] = [board[currIndex], board[index - 1]];
  const moveHistory = [...state.moveHistory, currIndex];

  state = {...state, board, moveHistory}

  state = checkBoardUtility(state);
  state = updateAvailableMovesUtility(state);

  return state;
}

const checkBoardUtility = (state) => {
  let win = true;
  state.board.forEach((e, i) => {
    const homeIndex = ((e.imageRow - 1) * state.boardSize) + (e.imageColumn - 1);
    if (homeIndex !== i && e.imageRow !== 'X') { win = false }
  });
  return {...state, win};
}

const setBoardUtility = (state) => {
  const board = [];
  for (let imageRow = 1; imageRow <= state.boardSize; imageRow++) {
    for (let imageColumn = 1; imageColumn <= state.boardSize; imageColumn++) {
      if (imageColumn === state.boardSize && imageRow === state.boardSize) {
        board.push({ imageRow: 'X', imageColumn: 'X' })
      } else {
        board.push({ imageRow, imageColumn });
      }
      
    }
  }
  return {...state, board, openSpot: state.boardSize ** 2 - 1 }

}

const newGameUtility = (state,numTiles, numMoves) => {
  const image = images[Math.floor(Math.random() * images.length)].item;
  const win = false;
  const moves = numMoves;
  const boardSize = numTiles;
  const currGame = true;
  return {...state, image, win, moves, boardSize, currGame}
}

const randomizeBoardUtility = (state, numMoves) => {
  for (let i = 0; i < numMoves * 10; i++) {
    const moves = state.possibleMoves;
    const lastMove = state.moveHistory[state.moveHistory.length - 1];
    const tile = () => {
      if (moves[Math.floor(Math.random() * moves.length)] === lastMove) {
        return tile()
      } else { return moves[Math.floor(Math.random() * moves.length)] }
    }
  
    state = moveTileUtility(state, tile() + 1);
    state = checkBoardUtility(state);
    state = updateAvailableMovesUtility(state);

  }

  return state


}

class App extends Component {
  state = {
    image: 'winnie1.jpg',
    tileSize: '',
    possibleMoves: [],
    moveHistory: [],
    boardSize: 4,
    board: [],
    openSpot: 0,
    win: false
  
  };

  setTile = () => {
    this.setState(state=> {
      return { tileSize: Math.min(window.innerHeight, window.innerWidth)*.98 / state.boardSize }
    });
  };

  setBoard = () => {
    this.setState(state => {
      state = setBoardUtility(state);
      state = updateAvailableMovesUtility(state);


      return state;
    })
  }

  updateAvailableMoves = () => {
    this.setState(state => updateAvailableMovesUtility(state))
    
  }

  moveTile = (index, e) => {
    this.setState(state => {
      state = moveTileUtility(state, index);
      return state
    });
  }

  checkBoard = () => {
    this.setState(state=> checkBoardUtility(state));
  }

  newGame = (numTiles, numMoves) => {
    this.setState(state => {
      state = newGameUtility(state, numTiles, numMoves);
      state = setBoardUtility(state);
      state = updateAvailableMovesUtility(state);
      state = randomizeBoardUtility(state, numMoves);
      return state
      });
  };



 




  componentDidMount() {
    this.newGame(4, 4);
    this.setTile();
    window.addEventListener('resize', this.setTile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setTile);

  }

  render() {
    return (
      <Board gridSize={this.state.boardSize}>
        {this.state.board.map((e, i) => <Tile clickHandler={this.moveTile}  {...e} image={this.state.image} boardSize={this.state.boardSize} index={i + 1} size={this.state.tileSize}/>)}
      </Board>

    )
  }
}

export default App;
