function rotateArrayToLeft(arr, k) {
    if (arr.length === 0) {
      console.log(`given array is not empty.`);
      return;
    }
    console.log(`original array :- ${JSON.stringify(arr)}`);
    let n = arr.length;
    if (k > n) {
        k = k % n;
    }
    for (let i = 0, j = k - 1; i < j; i++, j--){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    for (let i = k, j = n - 1; i < j; i++, j--){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    for (let i = 0, j = n - 1; i < j; i++, j--){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(`array after rotation :- ${JSON.stringify(arr)}`);
}


rotateArrayToLeft([10, 20, -30, 40, 50, -60], 5);
rotateArrayToLeft([16, -29, 33, 47, 51, 64], 15);
rotateArrayToLeft([], 7);
rotateArrayToLeft([10, 20, 30, 40, 50], 2);