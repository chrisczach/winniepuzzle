import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    image: '',
    tileSize: '',
    possibleMoves: [],
    moveHistory: [],
    boardSize: 4,
    board: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13,14,15,'X']
    ]
  };

  setTile = () => {
    this.setState({
      sileSize: Math.min(window.innerHeight, window.innerWidth)
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
    return <>test</>;
  }
}

export default App;
