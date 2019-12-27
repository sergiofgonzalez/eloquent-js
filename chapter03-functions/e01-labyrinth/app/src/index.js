'use strict';
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

class Labyrinth {
  constructor(labyrinthMap, startingPosRow = 0, startingPosCol = 0) {
    this.labyrinth = labyrinthMap;
    this.maxCol = this.labyrinth[0].length - 1;
    this.maxRow = this.labyrinth.length - 1;
    this.startingPosRow = startingPosRow;
    this.startingPosCol = startingPosCol;
    this.exitFound = false;
  }

  get(row, col) {
    if (col <= this.maxCol && row <= this.maxRow) {
      return this.labyrinth[row][col];
    }
  }

  set(row, col, value) {
    if (col <= this.maxCol && row <= this.maxRow) {
      this.labyrinth[row][col] = value;
    }
  }

  print() {
    
    for (let row = 0; row <= this.maxRow; row++) {    
      let line = '';
      for (let col = 0; col <= this.maxCol; col++) {
        line += this.labyrinth[row][col] + ' ';
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      console.log(line);
    }
  }
}

// const sampleLabyrinth = new Labyrinth([
//   [' ', 'W'],
//   [' ', 'E']
// ]);

// const sampleLabyrinth = new Labyrinth([
//   [' ', ' ', 'W'],
//   [' ', 'W', 'E'],
//   [' ', ' ', ' '],
// ]);

// const sampleLabyrinth = new Labyrinth([
//   [' ', 'W', ' ', 'E'],
//   [' ', 'W', ' ', ' '],
//   [' ', 'W', 'W', ' '],
//   [' ', ' ', ' ', ' '],
// ]);


const sampleLabyrinth = new Labyrinth([
  [' ', 'W', ' ', ' ', 'E'],
  [' ', 'W', ' ', ' ', ' '],
  [' ', ' ', 'W', 'W', ' '],
  [' ', ' ', 'W', ' ', ' '],
  [' ', ' ', ' ', ' ', 'W'],  
]);
sampleLabyrinth.print();


function walk(row, col, labyrinth) {
  if (labyrinth.get(row, col) === 'E') {
    labyrinth.exitFound = true;
    console.log(`Exit was found at row ${ row }, col ${ col }`);
  } else {
    if (labyrinth.get(row, col) === ' ') {
      labyrinth.set(row, col, 'V'); // visited
      if (!labyrinth.exitFound && col < labyrinth.maxCol) {
        walk(row, col + 1, labyrinth);
      }
      if (!labyrinth.exitFound && row < labyrinth.maxRow) {
        walk(row + 1, col, labyrinth);
      }
      if (!labyrinth.exitFound && col > 0) {
        walk(row , col - 1, labyrinth);
      }
      if (!labyrinth.exitFound && row > 0) {
        walk(row - 1, col, labyrinth);
      }
      labyrinth.set(row, col, 'X');  
    }
  }
}

walk(sampleLabyrinth.startingPosRow, sampleLabyrinth.startingPosCol, sampleLabyrinth);
sampleLabyrinth.print();
