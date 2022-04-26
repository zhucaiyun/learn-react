/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-25 15:43:48
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-26 16:05:33
 * @Description  : 描述信息
 */
import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'

// class Square extends React.Component { 
//   render() { 
//     return (
//       <button className="square" onClick={() =>this.props.onClick()} >{ this.props.value }</button>
//     )
//   }
// }

// 函数组件
function Square(props) { 
  return (
    <button className="square" onClick={props.onClick}>{ props.value }</button>
  )
}
class Board extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      isWinter: null
    }
  }

  handleClick(i) { 
    const squares = this.state.squares.slice()
    squares[i] = this.state.xIsNext? 'X':'O'
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext ,isWinter: calculateWinner(squares)})
  }

  renderSquare(i) { 
    return <Square value={this.state.squares[i]} onClick={() => { this.handleClick(i)}}/>;
  }
  render() { 
    const status = 'Next player: ' + (this.state.xIsNext?'X':'O') + 'winner:'+this.state.isWinter
    return(
      <div>
        <div className="status"> {status} </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
class Game extends React.Component { 
  render() { 
    return (
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className='game-info'>
          <div> { }</div>
          <div> { }</div>
        </div>
      </div>
    )
  }
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Game />)


// 判断胜出者
function calculateWinner(squares) { 
  console.log(squares)
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) { 
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { 
      console.log(squares[a])
      return squares[a]
    }
  }
  return null
}