function mergeSort(arr, order) {
  if (arr.length === 0) {
    console.log(`given array is empty.`);
    return;
  }
  if (arr.length <= 1) {
    return arr;
  }

  let midIndex = Math.floor(arr.length / 2);
  let leftArray = mergeSort(arr.slice(0, midIndex), order);
  let rightArray = mergeSort(arr.slice(midIndex), order);

  let finalArray = [];
  let i = 0,
    j = 0;

  if (order === "asc") {
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        finalArray.push(leftArray[i]);
        i++;
      } else {
        finalArray.push(rightArray[j]);
        j++;
      }
    }
  } else if (order === "desc") {
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] > rightArray[j]) {
        finalArray.push(leftArray[i]);
        i++;
      } else {
        finalArray.push(rightArray[j]);
        j++;
      }
    }
  }

  while (i < leftArray.length) {
    finalArray.push(leftArray[i]);
    i++;
  }
  while (j < rightArray.length) {
    finalArray.push(rightArray[j]);
    j++;
  }

  return finalArray;
}

console.log("Ascending Order :-", mergeSort([4, 2, 6, 5, 7, 1, 3], "asc"));
console.log("Descending Order :-", mergeSort([4, 2, 6, 5, 7, 1, 3], "desc"));
