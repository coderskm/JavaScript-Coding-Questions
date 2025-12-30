function bubbleSort(arr, order) {
  if (arr.length === 0) {
    console.log(`given array is empty.`);
    return;
  }
  console.log(`original array :- ${JSON.stringify(arr)}`);

  if (order === "asc") {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
    }
    console.log(`bubble sorted ascending order :- ${JSON.stringify(arr)}`);
    return;
  } else if (order === "desc") {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] < arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
    }
    console.log(`bubble sorted descending order :- ${JSON.stringify(arr)}`);
    return;
  }
}

bubbleSort([4, 2, 6, 5, 1, 3], "asc");
bubbleSort([4, 2, 6, 5, 1, 3], "desc");
