function multiplicationMatrices(m1, m2) {
  if (m1.length === 0 || m2.length === 0) {
    console.log(`one or both of the given matrices are empty.`);
    return;
  }
  let rowsm1 = m1.length;
  let colsm1 = m1[0].length;
  let rowsm2 = m2.length;
  let colsm2 = m2[0].length;

  if (colsm1 !== rowsm2) {
    console.log(`rows of 1st matrix should be equal to columns of 2nd matrix.`);
    return;
  }
  let productArray = Array.from({ length: rowsm1 }, () => Array.from({ length: colsm2 }, () => 0));

  for (let i = 0; i < rowsm1; i++) {
    for (let j = 0; j < colsm2; j++) {
      for (let k = 0; k < colsm1; k++) {
        productArray[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }
  console.log(`multiplication of given matrices :- ${JSON.stringify(productArray)}`);
  return;
}

multiplicationMatrices(
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  [[12, 78]]
);
multiplicationMatrices([], [[12, 78]]);
multiplicationMatrices(
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8],
    [9, 10],
    [11, 12],
  ]
);
multiplicationMatrices(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ]
);
