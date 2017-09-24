import React, {Component} from 'react'

export default class Square extends Component{
  handleClick = () => {
    let {value, handleClick, index} = this.props
    handleClick(index)
  }
  render() {
    return (
      <button className="square"
              onClick={this.handleClick}>{this.props.value}</button>
    )
  }
}

