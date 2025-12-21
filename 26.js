function secondLargest(arr) {
    if (arr.length === 0) {
        console.log(`array cannot be empty.`);
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
    console.log(`second largest element in array :- ${secondLargest}`);
    return;
}

secondLargest([67, -12, 89, -34, 47, -25]);
secondLargest([]);