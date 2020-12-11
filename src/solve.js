import {check} from './check'

export const solve = function(board) {

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      var place = i.toString() + j.toString()
      if (document.getElementById(place).value !== '') {
        if (/^[1-9]$/.test(document.getElementById(place).value)) {
          board[i][j] = document.getElementById(place).value
        } else {
          return {board: board, originalBoard: board, message: 'Please recheck board, all entries must be numbers 1 through 9'}
        }
      }
    }
  }

  var res = []
  for (let i = 0; i < 9; i++) {
    res[i] = [...board[i]]
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ' ') {
        if (!check(board, i, j)) {
          return {board: board, originalBoard: board, message: 'Invalid board, please make sure no row, column or box has a repeat number'}
        }
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ' ') {
        if (res[i][j] === ' ') {
          res[i][j] = '1'
        } else {
          res[i][j] = (parseInt(res[i][j]) + 1).toString()
        }
        while (!(check(res, i, j)) && res[i][j] !== '9') {
          res[i][j] = (parseInt(res[i][j]) + 1).toString()
        }
        if (!(check(res, i, j)) && res[i][j] === '9') {
          while (res[i][j] === '9' || / ^[1-9]$/.test(board[i][j])) {
            if (board[i][j] === ' ') {
              res[i][j] = ' '
            }
            j--
            while (board[i][j] !== ' ' && j > -1) {
              j--
            }

            if (j < 0) {
              i--
              j = 8
              if (i < 0) {
                return {board: board, originalBoard: board, message: 'Board is unsolvable'}
              }
            }
          }
          j--
        }
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      place = i.toString() + j.toString()
      document.getElementById(place).value = res[i][j]
    }
  }

  return {board: res, originalBoard: board, message: ''}
}
