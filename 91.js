function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndexValue = pivot(arr, left, right);
    quickSort(arr, left, pivotIndexValue - 1);
    quickSort(arr, pivotIndexValue + 1, right);
  }

  return arr;
}

function pivot(arr, pivotIndex = 0, endIndex = arr.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
      if (arr[i] < arr[pivotIndex]) {
        swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[pivotIndex], arr[swapIndex]] = [arr[swapIndex], arr[pivotIndex]];
  return swapIndex;
}

console.log(quickSort([4, 2, 6, 5, 7, 1, 3]));
console.log(quickSort([4, -2, 6, -5, 7, -1, 3]));
