/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-04-25 15:43:48
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-04-25 18:25:17
 * @Description  : 描述信息
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Square extends React.Component { 
  render() { 
    return (
      <button className="square"></button>
    )
  }
}

class Board extends React.Component { 
  renderSquare(i) { 
    return <Square />;
  }
  render() { 
    const status = 'Next player: X'
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
ReactDOM.render(
  <Game />,
  document.getElementById('root')
)