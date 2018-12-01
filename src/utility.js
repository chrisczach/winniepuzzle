export function updateAvailableMovesUtility (state) {
  const currIndex = state.board.findIndex(e => e.imageRow === 'X');
  const possibleMoves = [];
  if ((currIndex + 1) % state.boardSize !== 0)
    possibleMoves.push(currIndex + 1);
  if (currIndex % state.boardSize !== 0) possibleMoves.push(currIndex - 1);
  if (currIndex - state.boardSize >= 0)
    possibleMoves.push(currIndex - state.boardSize);
  if (currIndex + state.boardSize < state.board.length)
    possibleMoves.push(currIndex + state.boardSize);
  return { ...state, possibleMoves };
};

export function moveTileUtility (state, index) {
  const currIndex = state.board.findIndex(e => e.imageRow === 'X');
  if (state.possibleMoves.indexOf(index - 1) === -1) return state;
  const board = state.board;
  [board[index - 1], board[currIndex]] = [board[currIndex], board[index - 1]];
  const moveHistory = [...state.moveHistory, currIndex];

  state = { ...state, board, moveHistory };
  state = updateAvailableMovesUtility(state);

  return state;
};

export function checkBoardUtility (state) {
  let win = true;
  let currGame = state.currGame;
  state.board.forEach((e, i) => {
    const homeIndex = (e.imageRow - 1) * state.boardSize + (e.imageColumn - 1);
    if (homeIndex !== i && e.imageRow !== 'X') {
      win = false;
    }
  });
  if (win) {
    currGame = false;
  }
  return { ...state, win, currGame };
};

export function setBoardUtility (state) {
  const board = [];
  for (let imageRow = 1; imageRow <= state.boardSize; imageRow++) {
    for (let imageColumn = 1; imageColumn <= state.boardSize; imageColumn++) {
      if (imageColumn === state.boardSize && imageRow === state.boardSize) {
        board.push({ imageRow: 'X', imageColumn: 'X' });
      } else {
        board.push({ imageRow, imageColumn });
      }
    }
  }
  return {
    ...state,
    board,
    openSpot: state.boardSize ** 2 - 1,
    moveHistory: []
  };
};

export function setTileUtility (state) {
  const tileSize = (Math.min(window.innerHeight, window.innerWidth) * 0.98) / state.boardSize
  return { ...state, tileSize }
    
};

export function newGameUtility (state, numTiles, level, images) {
  const image = images[Math.floor(Math.random() * images.length)].item;
  const win = false;
  const boardSize = numTiles;
  const currGame = true;
  return { ...state, image, win, level, boardSize, currGame };
};

export function randomizeBoardUtility (state, level) {
  for (let i = 0; i < level * 15; i++) {
    const moves = state.possibleMoves;
    const lastMove = state.moveHistory[state.moveHistory.length - 1];
    const tile = () => {
      if (moves[Math.floor(Math.random() * moves.length)] === lastMove) {
        return tile();
      } else {
        return moves[Math.floor(Math.random() * moves.length)];
      }
    };

    state = moveTileUtility(state, tile() + 1);
  }

  return state;
};