import React, {Component} from 'react'

export default class Square extends Component{
  render() {
    if (this.props.hightLight) {
      return (
        <button className="square"
                style={{color: 'red'}}
                onClick={this.props.handleClick}>{this.props.value}</button>
      )
    } else {
      return (
        <button className="square"
                onClick={this.props.handleClick}>{this.props.value}</button>
      )
    }
  }
}

