function maxSumSubArray(arr) {
    if (arr.length === 0) {
      console.log(`array cannot be empty.`);
      return;
    }
    let maxSum = Number.MIN_VALUE;
    let currSum = 0;
    for (let i = 0; i < arr.length; i++){
        currSum += arr[i];
        if (currSum > maxSum) {
            maxSum = currSum;
        }
        if (currSum < 0) {
            currSum = 0;
        }

    }
    console.log(`Maximum sum of subarray :- ${maxSum}`);
    return;
}

maxSumSubArray([-5, 4, 6 - 3, 4, -1]);
maxSumSubArray([]);
maxSumSubArray([67, -12, 89, -34, 47, -25]);