export const check = function(res, i, j) {
  var num = res[i][j]
  for (let k = 0; k < 9; k++) {
    if (res[i][k] === num && k !== j) {
      return false
    }
    if (res[k][j] === num && k !== i) {
      return false
    }
  }
  for (let k = (i - i % 3); k < (i - i % 3) + 3; k++) {
    for (let m = (j - j % 3); m < (j - j % 3) + 3; m++) {
      if (res[k][m] === num && i !== k && j !== m) {
        return false
      }
    }
  }
  return true
}
