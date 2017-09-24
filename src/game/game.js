import React, {Component} from 'react'
import Board from '../board/board'
export default class Game extends Component{
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xisNext: true
    }
  }

  handleClick = (i) => {
    const history = this.state.history
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    if (squares[i] || calculateWin(squares)) {
      return
    }
    squares[i] = this.state.xisNext ? 'x' : 'o'
    this.setState({
      history: [...history, {squares: squares}],
      xisNext: !this.state.xisNext
    })
  }

  render() {
    const history = this.state.history
    const current = history[history.length - 1]
    const winner = calculateWin(current.squares)
    const status = this.state.xisNext ? 'x' : 'o'
    
    return (
      <div className="square-wrapper">
        <div className="title">next play {status}</div>
        <div className="winner">winner is {winner}</div>
        <Board squares={current.squares}
               handleClick={this.handleClick}/>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}
function calculateWin(squares) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i< winLines.length; i++) {
    const [a, b, c] = winLines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}