function sortArrWith0and1(arr) {
  if (arr.length === 0) {
    console.log(`given array is empty.`);
    return;
    }
  console.log(`original array :- ${JSON.stringify(arr)}`);
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    if (arr[p1] === 1) {
      if (arr[p2] !== 1) {
        [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
      }
      p2--;
    } else {
      p1++;
    }
  }
  console.log(`sorted array :- ${JSON.stringify(arr)}`);
}

sortArrWith0and1([1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1]);
sortArrWith0and1([]);
