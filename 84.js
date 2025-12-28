function subtractionMatrices(m1, m2) {
  if (m1.length === 0 || m2.length === 0) {
    console.log(`one or both of the given matrices are empty.`);
    return;
  }
  let rows = m1.length;
  let columns = m1[0].length;
  let diffArray = [];

  if (rows !== m2.length || columns !== m2[0].length) {
    console.log(`given rows and columns don't match for both the matrices.`);
    return;
  }

  for (let i = 0; i < rows; i++) {
    diffArray[i] = [];
    for (let j = 0; j < columns; j++) {
      diffArray[i][j] = m1[i][j] - m2[i][j];
    }
  }
  console.log(`subtraction of given matrices :- ${JSON.stringify(diffArray)}`);
  return;
}

subtractionMatrices(
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ]
);
subtractionMatrices(
  [
    [18, 26],
    [32, 48],
  ],
  []
);
subtractionMatrices(
  [
    [-55, 33],
    [77, -88],
  ],
  [[11], [22, 66]]
);