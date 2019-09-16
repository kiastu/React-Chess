import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Board/>
    </div>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props)

  }
}

class Board extends React.Component {
  constructor (props) {
    super(props)

    let board = new Array(8).fill(0).map(() => new Array(8).fill(0))

    for(let x = 0; x < 8 ; x+=1) {
      board[1][x] = (<Pawn x={x}  y={1} color = "black"/>)
      board[6][x] = (<Pawn x={x}  y={6} color = "white"/>)
    }

    // TODO: implement and render the rest of the pieces
    
    this.state = {
      board: board,
    }

  }

  resetBoard() {
  }

  render() {
    return (
      <div className= "centered">
        <div className="chessboard">
          {this.renderRow(0)}
          {this.renderRow(1)}
          {this.renderRow(2)}
          {this.renderRow(3)}
          {this.renderRow(4)}
          {this.renderRow(5)}
          {this.renderRow(6)}
          {this.renderRow(7)}
        </div>
      </div>
      )
  }

  renderSquare(maybePiece) {
    return (<button class="square" occupiedBy={maybePiece}> {maybePiece == 0 ? "" : maybePiece}</button>)
  }

  renderRow(y) {
    return (
      <div className="board-row"  y-value = {y}>
        {this.renderSquare(this.state.board[y][0])}
        {this.renderSquare(this.state.board[y][1])}
        {this.renderSquare(this.state.board[y][2])}
        {this.renderSquare(this.state.board[y][3])}
        {this.renderSquare(this.state.board[y][4])}
        {this.renderSquare(this.state.board[y][5])}
        {this.renderSquare(this.state.board[y][6])}
        {this.renderSquare(this.state.board[y][7])}
      </div>
    )

  }
}

class ChessPiece extends React.Component {
  // TODO: Propagate down onClick events. 
  constructor (props) {
    super(props)
    this.state = props
  }

  getMoves(x, y) {
    new Error("Must implement function getValue for " + this.class)
  }

  getValue() {
    new Error("Must implement function getValue for " + this.class)
  }

  render () {
    return (<p>Should've implemented something yo</p>)
  }
}

class Pawn extends ChessPiece {
  constructor(props) {
    super(props)
    this.state = props
  }
  getMoves (x, y, grid, isFirstMove=false) {
    // TODO: implement.
    let moves = []
    return moves
  }

  render() {
    return (<div class = {this.state.color}> pawn</div>)
  }
}

export default App;


// TODO: Implement Piece superclass, and piece classes move constraints.
// TODO: Implement Moving Pieces
// TODO: Implement Capturing
// TODO: Implement Win conditions.
// TODO: Implement tie conditions.
// TODO: Implement piece rendering.
// TODO: Implement Piece rendering
// TODO: Implement Undo
// TODO: Implement optional move clock.

// ===== OPTIONAL ======
// TODO: Implement backend server
// TODO: Persist state in backend server
// TODO: Implement invite linking
// TODO: Implement real time moves.



/*
=====Completed=====
 TODO: Implement Board colors. DK


*/
