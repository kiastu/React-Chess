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
  // TODO: Implement Game state saving.

}

class Board extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="board">
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

  renderSquare(y, isBlack) {
    return (<Square isBlack = {isBlack} value = {y}/>)
  }

  renderRow(x) {
    return (
      <div className="board-row"  x-value = {x}>
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
      </div>
    )

  }


}

function Square(props) {
  return (
      <button className="square" occupiedBy={props.occupiedBy}>{props.occupiedBy}</button>
    )
}

export default App;


// TODO: Implement Piece superclass, and piece classes move constraints.
// TODO: Implement Moving Pieces
// TODO: Implement Capturing
// TODO: Implement Win conditions.
// TODO: Implement tie conditions.
// TODO: Implement piece rendering.
// TODO: Implement Board colors. === In progress - DK =====
// TODO: Implement Piece rendering
// TODO: Implement Undo
// TODO: Implement optional move clock.

// ===== OPTIONAL ======
// TODO: Implement backend server
// TODO: Persist state in backend server
// TODO: Implement invite linking
// TODO: Implement real time moves.
