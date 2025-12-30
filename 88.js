function selectionSort(arr, order) {
  if (arr.length === 0) {
    console.log(`given array is empty.`);
    return;
  }
  console.log(`original array :- ${JSON.stringify(arr)}`);
  if (order === "asc") {
    let min = -1;
    for (let i = 0; i < arr.length - 1; i++) {
      min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (i !== min) {
        [arr[min], arr[i]] = [arr[i], arr[min]];
      }
    }
    console.log(`bubble sorted ascending order :- ${JSON.stringify(arr)}`);
    return;
  } else if (order === "desc") {
    let max = -1;
    for (let i = 0; i < arr.length - 1; i++) {
      max = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[max]) {
          max = j;
        }
      }
      if (i !== max) {
        [arr[i], arr[max]] = [arr[max], arr[i]];
      }
    }
    console.log(`bubble sorted descending order :- ${JSON.stringify(arr)}`);
    return;
  }
}

selectionSort([4, 2, 6, 5, 1, 3], "asc");
selectionSort([4, 2, 6, 5, 1, 3], "desc");
