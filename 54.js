function smallestElementGreaterThanOrEqualk(arr, k) {
  if (arr.length === 0) {
    console.log(`given array is empty.`);
    return;
  }
  let store = [];
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= k) {
      store.push(arr[i]);
    }
  }

  for (let i = 0; i < store.length; i++) {
    if (store[i] < min) {
      min = store[i];
    }
  }

  if (min === Number.MAX_VALUE) {
    console.log(`no element found greater than ${k}`);
    return;
  } else {
    console.log(`smallest element greater than or equal to ${k}:- ${min}`);
    return;
  }
}

smallestElementGreaterThanOrEqualk([1, 3, 4, 7, 8, 9, 9, 10], 5);
smallestElementGreaterThanOrEqualk([], 5);
smallestElementGreaterThanOrEqualk([71, -33, 496, -7, 234, -89, 345, -100], 500);
smallestElementGreaterThanOrEqualk([71, -33, 496, -7, 234, -89, 345, -100], 400);
