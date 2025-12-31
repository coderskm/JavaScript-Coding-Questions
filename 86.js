function spiralMatrix(mat) {
  if (mat.length === 0) {
    console.log(`given array is empty`);
  }

  console.log(`given matrix :- ${JSON.stringify(mat)}`);
  let top = 0,
    left = 0,
    bottom = mat.length - 1,
    right = mat[0].length - 1;

  let spiralMatrix = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      spiralMatrix.push(mat[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      spiralMatrix.push(mat[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiralMatrix.push(mat[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiralMatrix.push(mat[i][left]);
      }
      left++;
    }
  }
  console.log(`spiral traversal of matrix :- ${JSON.stringify(spiralMatrix)}`);
  return;
}

spiralMatrix([
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
]);
