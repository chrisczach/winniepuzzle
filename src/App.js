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
    board: []
  
  };

  setTile = () => {
    this.setState(state=> {
      return { tileSize: Math.min(window.innerHeight, window.innerWidth) / state.boardSize }
    });
  };

  setBoard = () => {
    this.setState(state => {
      const board = [];
      for (let imageRow = 1; imageRow <= state.boardSize; imageRow++) {
        for (let imageColumn = 1; imageColumn <= state.boardSize; imageColumn++){
          board.push({imageRow, imageColumn})
        }
      }
      return {board}
    })
  }

  updateAvailableMoves = () => {
    this.setState(state => {
      const currIndex = state.board.indexOf('X');
      const possibleMoves = [];
      if ((currIndex + 1 )% state.boardSize !== 0) possibleMoves.push(currIndex + 1)
      if (currIndex % state.boardSize !== 0) possibleMoves.push(currIndex - 1)
      if (currIndex - state.boardSize >= 0) possibleMoves.push(currIndex - state.boardSize)
      if (currIndex + state.boardSize < state.board.length) possibleMoves.push(currIndex + state.boardSize)
      return {possibleMoves}
    })
    
  }


  componentDidMount() {
    this.setBoard();
    this.setTile();
    window.addEventListener('resize',this.setTile)
  }

  componentWillUnmount() {
    window.removeEventListener('resize',this.setTile)
  }

  render() {
    return (
      <Board gridSize={this.state.boardSize}>
        {this.state.board.map((e, i) => <Tile {...e} image={this.state.image} boardSize={this.state.boardSize} index={i + 1} size={this.state.tileSize}/>)}
      </Board>

    )
  }
}

export default App;
