'use strict';
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;


class ChessBoard {
  constructor(numQueens) {
    this.solution = false;
    this.numQueens = numQueens; 
    this.board = [];
    for (let i = 0; i < numQueens; i++) {
      this.board.push(undefined);
    }
  }
}

function tryToPositionQueen(i, chessBoard) {
  if (i === chessBoard.numQueens) {
    chessBoard.solution = true;
    console.log(`Solution found: cols for queens: ${ chessBoard.board }`);
  } else {
    for (let j = 0; j < 8 && !chessBoard.solution; j++) {
      console.log(`Trying to position queen #${ i } in col ${ j }`);
      chessBoard.board[i] = j;
      if (isValidPosition(i, chessBoard)) {
        console.log(`  => queen #${ i } in col ${ j } seems valid for now`);
        tryToPositionQueen(i + 1, chessBoard);
      }
    }
  }
}

function isValidPosition(i, chessBoard) {
  let isValid = true;
  for (let j = 0; j <= i - 1 && isValid; j++) {
    if (chessBoard.board[j] === chessBoard.board[i] || Math.abs(chessBoard.board[j] - chessBoard.board[i]) === i - j) {
      isValid = false;
    }
  }
  return isValid;
}


tryToPositionQueen(0, new ChessBoard(8));
