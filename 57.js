function binarySearch(arr, x) {
    if (arr.length === 0) {
        console.log(`given array is empty.`);
        return;
    }
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (x > arr[mid]) {
            start = mid + 1;
        } else if (x < arr[mid]) {
            end = mid - 1;
        } else {
            console.log(`${x} found at index ${mid} in array.`);
            return;
        }
    }
    console.log(`${x} not found in array.`);
    return;
}

binarySearch([342, 7, 132, 67, 87, 93, 42], -23);
binarySearch([]);
binarySearch([74, -2, -7, 32, -57, 89, -99, 42], 32);