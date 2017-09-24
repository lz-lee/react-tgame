import React, {Component} from 'react'
import Square from '../square/square'
export default class Board extends Component{
  renderSquare = (i) => {
    const {squares, handleClick} = this.props
    return (
      <Square value={squares[i]}
              index={i}
              handleClick={handleClick}/>
    )
  }

  render() {
    return (
      <div className="board-wrapper">
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}



