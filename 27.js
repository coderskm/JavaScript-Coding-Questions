function secondSmallest(arr) {
  if (arr.length === 0) {
    console.log(`array cannot be empty.`);
    return;
  }
  let smallest = Number.MAX_VALUE;
  let secondSmallest = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else {
      if (arr[i] < secondSmallest && arr[i] > smallest) {
        secondSmallest = arr[i];
      }
    }
  }
  console.log(`second smallest element in array :- ${secondSmallest}`);
  return;
}

secondSmallest([67, -12, 89, -34, 47, -25]);
secondSmallest([]);
