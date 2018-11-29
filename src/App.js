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
      const board = [];
      for (let imageRow = 1; imageRow <= state.boardSize; imageRow++) {
        for (let imageColumn = 1; imageColumn <= state.boardSize; imageColumn++){
          if (imageColumn === state.boardSize && imageRow === state.boardSize) {
            board.push({imageRow: 'X', imageColumn: 'X'})
          } else {
            board.push({ imageRow, imageColumn });
          }
          
        }
      }
      return {board, openSpot: state.boardSize**2-1}
    })
  }

  updateAvailableMoves = () => {
    this.setState(state => {
      const currIndex = state.board.findIndex(e=> e.imageRow === 'X');
      const possibleMoves = [];
      if ((currIndex + 1 )% state.boardSize !== 0) possibleMoves.push(currIndex + 1)
      if (currIndex % state.boardSize !== 0) possibleMoves.push(currIndex - 1)
      if (currIndex - state.boardSize >= 0) possibleMoves.push(currIndex - state.boardSize)
      if (currIndex + state.boardSize < state.board.length) possibleMoves.push(currIndex + state.boardSize)
      return {possibleMoves}
    })
    
  }
  // newGame = (numTiles, numMoves) => {
  //   this.setState(state => {
  //     const image = images[Math.floor(Math.random() * images.length)];
  //     const win = false

  //   })
  // }

  moveTile = (index, e) => {
    this.setState(state => {
      const currIndex = state.board.findIndex(e => e.imageRow === 'X')
      if (state.possibleMoves.indexOf(index - 1) === -1) return
      const board = state.board;
      [board[index - 1], board[currIndex]] = [board[currIndex], board[index - 1]];
      const moveHistory = [...state.moveHistory, currIndex];
      return { board, moveHistory }
    });
    this.checkBoard();
    this.updateAvailableMoves();
  }

  checkBoard = () => {
    this.setState(state => {
      let win = true;
      state.board.forEach((e, i) => {
        const homeIndex = ((e.imageRow - 1) * state.boardSize) + (e.imageColumn - 1);
        if (homeIndex !== i && e.imageRow !== 'X') { win = false }
      });
      return { win };
    });
  }


  componentDidMount() {
    this.setBoard();
    this.setTile();
    this.updateAvailableMoves();
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
