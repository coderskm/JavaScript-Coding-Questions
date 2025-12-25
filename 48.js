function maxSumPair(arr) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }

    let largest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else {
            if (arr[i]>secondLargest && arr[i]<largest) {
                secondLargest = arr[i];
            }
        }
    }
    let maxSum = secondLargest + largest;
    console.log(`maximum sum of pair of elements :- ${maxSum}`);
    return;
}

maxSumPair([1, 2, 4, 89, -76]);
maxSumPair([]);