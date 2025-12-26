function DNF(arr) {
  if (arr.length === 0) {
    console.log(`given array is empty.`);
    return;
  }
  console.log(`original array :- ${JSON.stringify(arr)}`);
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    switch (arr[mid]) {
      case 0: {
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
        break;
      }
      case 1: {
        mid++;
        break;
      }
      case 2: {
        [arr[high], arr[mid]] = [arr[mid], arr[high]];
        high--;
        break;
      }
    }
  }
  console.log(`sorted array :- ${JSON.stringify(arr)}`);
}

DNF([1, 0, 2, 1, 1, 0, 0, 2, 0, 1, 1, 2, 0, 0, 1]);
DNF([]);
