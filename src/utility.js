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
  const direction = index === currIndex ? 'right' : index - 2 === currIndex ? 'left': index > currIndex ? 'up' : 'down';
  const lastMove = { tileIndex: index, direction };
  state = { ...state, board, moveHistory, lastMove };
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

export function newGameUtility (state, images) {
  const image = images[Math.floor(Math.random() * images.length)];
  const win = false;
  const currGame = true;
  return { ...state, image, win , currGame };
};

export function randomizeBoardUtility (state) {
  for (let i = 0; i < state.level * 15; i++) {
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

// Checks if should display install popup notification:
export function showInstallUtility () {
  console.log(window.navigator.userAgent.toLowerCase());
  console.log(window.navigator);
  if (/iphone|ipad|ipod/.test( window.navigator.userAgent.toLowerCase()) && !('standalone' in window.navigator) && !(window.navigator.standalone)) {
   return true
  } else {
    return false
  }

}
