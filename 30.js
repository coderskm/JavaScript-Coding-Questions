function deleteMultipleOf5(arr) {
  if (arr.length === 0) {
    console.log(`array cannot be empty.`);
    return;
  }
  console.log(`original array :- ${arr}`);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      arr[i] = arr[i + 1];
    }
  }
  console.log(`array after deleting multiples of 5 :- ${arr}`);
  return;
}

deleteMultipleOf5([-5, 4, 6 - 3, 4, -1]);
deleteMultipleOf5([]);
deleteMultipleOf5([67, -12, 89, -34, 47, -25]);
deleteMultipleOf5([12, 5, 67, 65, 55, 43, 10, 37, 105]);
