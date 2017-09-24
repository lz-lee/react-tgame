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
      stepNumber: 0,
      xisNext: true
    }
  }

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[this.state.stepNumber]
    const squares = current.squares.slice()

    if (squares[i] || calculateWin(squares)) {
      return
    }
    squares[i] = this.state.xisNext ? 'x' : 'o'
    this.setState({
      history: [...history, {squares: squares}],
      xisNext: !this.state.xisNext,
      stepNumber: history.length
    })
  }

  // 返回上一步，仍需确定上一步的操作者, x为默认的第一步
  jumpTo(i) {
    this.setState({
      stepNumber: i,
      xisNext: (i + 1) % 2 ? true : false
    })
  }

  render() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[this.state.stepNumber]
    const winner = calculateWin(current.squares)
    const status = this.state.xisNext ? 'x' : 'o'
    
    // 操作历史记录链接
    const moves = history.map((item, index) => {
      const desc = index ? `Move #${index}` : `Game start`
      return (
        <li key={index}>
          <a href="#" onClick={() => this.jumpTo(index)}>{desc}</a>
        </li>
      )
    })

    return (
      <div className="square-wrapper">
        <div className="title">
          <p>next play {status}</p>
          <p>winner is {winner}</p>
        </div>
        <Board squares={current.squares}
               handleClick={this.handleClick}/>
        <div className="game-info">
          <ol>{moves}</ol>
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