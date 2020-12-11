import React, { Component } from 'react';
import {solve} from './solve'
import {reset} from './reset'

class Sudoku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[' ',' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    ],
    originalBoard: [[' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' '],
  ],
    message: ''
    }
    this.reset = this.reset.bind(this)
    this.solve = this.solve.bind(this)
  }

  solve(){
    var state = solve(this.state.board)
    this.setState({
      board: state.board,
      originalBoard: state.originalBoard,
      message: state.message
    })
  }

  reset(){
    var state = reset()
    this.setState({
      board: state.board,
      originalBoard: state.originalBoard,
      message: ''
    })
  }

  render(){
    const board = this.state.board
    const orig = this.state.originalBoard

    return(
      <div id="main">
      <div id='board'>
      {
        board.map((j, jndex) => {
          return(
            <div id='row'>
            {
            j.map((i, index) =>{
              var id = (jndex.toString() + index.toString())
              var classId = 'inputs'
              if(jndex === 2 || jndex === 5){classId += ' bot'}
              if(index === 2 || index === 5){classId += ' right'}
              if(orig[jndex][index] === ' ' && board[0][0] !== ' '){classId += ' sol'}
              return(
                <input class={classId} id={id}></input>
              )
            })
          }
            </div>
          )
        })
      }
      </div>

        <button id='solve' class='button' onClick={this.solve}>
          Solve
        </button>
        <div class='space'/>
        <button id='reset' class='button' onClick={this.reset}>
          Reset
        </button>
        <p id='message'>{this.state.message}</p>
      </div>
    )
  }
}

export default Sudoku;
