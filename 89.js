function insertionSort(arr, order) {
  if (arr.length === 0) {
    console.log(`given array is empty.`);
    return;
  }
  console.log(`original array :- ${JSON.stringify(arr)}`);
  if (order === "asc") {
    let temp = -1;
    for (let i = 1; i < arr.length; i++) {
      temp = arr[i];
      for (var j = i - 1; arr[j] > temp && j > -1; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = temp;
    }
    console.log(`insertion sorted ascending order :- ${JSON.stringify(arr)}`);
    return;
  } else if (order === "desc") {
    let temp = -1;
    for (let i = 1; i < arr.length; i++) {
      temp = arr[i];
        for (var j = i - 1; arr[j] < temp && j > -1; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = temp;
    }
    console.log(`insertion sorted descending order :- ${JSON.stringify(arr)}`);
    return;
  }
}

insertionSort([4, 2, 6, 5, 1, 3], "asc");
insertionSort([4, 2, 6, 5, 1, 3], "desc");
