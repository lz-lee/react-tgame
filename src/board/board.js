import React, {Component} from 'react'
import Square from '../square/square'
export default class Board extends Component{
  renderSquare = (i) => {
    const {squares, handleClick, winLine} = this.props
    return (
      <Square value={squares[i]}
              key={i}
              hightLight={winLine.includes(i)}
              handleClick={() => handleClick(i)}/>
    )
  }

  render() {
    let rows = []
    for (let i = 0; i < 3; i++) {
      let row = []
      for (let j = i * 3; j < i * 3 + 3; j++) {
        row.push(this.renderSquare(j))
      }
      rows.push(<div className="row" key={i}>{row}</div>)
    }
    return (
      <div className="board-wrapper">
        {rows}
      </div>
    )
  }
}



